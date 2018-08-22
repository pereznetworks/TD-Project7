// app.js - main js for Static Porfolio Site to show off my projets

// require express framework module and create an express app object
    const express = require('express');
    const app = express();

// require and import project and profile data
    const portfolio = {}
    portfolio.projects = require('./data.json').projects;
    portfolio.profile = require('./profile.json').profile;

// encapsulating html snippets, status vars and a log method ...
// will use this to setup error handling
// will need to setup pug template to render html snippets
    const message = require('./routes/message.js');

// pug, .set method, view engine, beginning to implement html templates ...
    app.set('view engine', 'pug');

// set static stylesheets and html rendering engine
    app.use('/static', express.static('public'));
    app.use('/img', express.static('img'));

// route for main page
    app.get('/', (req, res, next) => {
        res.render( 'index', portfolio);
        next();
    });

// route for about page
    app.get('/about', (req, res, next) => {
        res.render( 'about' );
        message.log( message.status.about );
        next();
    });

// capturing the id passed
// for id of project details to render using project.pug
    app.param('id', (req, res, next, id) => {
        message.log( message.status.projects );
        console.log(portfolio.projects[id].project_name);
        res.render( 'project', portfolio.projects[id] );
        next(id);
    })

// route for projects
    app.get('/projects/:id', (req, res, next, id) => {
        // this route triggers app.param(id)
        // the rendering and messaging happens in app.param callback function
        next();
    });

// starting a simple web server, listen port 3000
    app.listen(3000, () => {
        message.log( message.status.running );
    });

/* NOTE: just some additional testing and code I may or may not use

    // { profile: [{heading: 'My Cool Apps', portfolio_desc: 'A portfolio of my cool apps'}]}
    // console.log(portfolio.profile[0].heading);
    // console.log(portfolio.profile[0].portfolio_desc);
    // console.log(portfolio.projects[0].project_name);
    // console.log(portfolio.projects[0].description);
    // console.log(portfolio.projects[0].image_urls[0]);

    // // import and use express routes
    //     const mainRoutes = require('./routes');
    //     app.use(mainRoutes);

    // // custom error handling
    //     app.use((req, res, next) => {  // custom 404 not found page
    //         const err = new Error('Not Found');
    //         err.status = 404;
    //         next(err);
    //     });
    //
    //     app.use((err, req, res, next) => { // custom error handler
    //         res.locals.error = err;
    //         res.status(err.status);
    //         res.render('error');
    //     });
    */

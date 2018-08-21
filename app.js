// app.js - main js for Static Porfolio Site to show off my projets

// encapsulating html snippets, status vars and a log method ...
// will use this to setup error handling
// will need to setup pug template to render html snippets
    const message = require('./routes/message.js');

// require express framework module and create an express app object
    const express = require('express');
    const app = express();
// require project and profile data
    const portfolio = {}
    portfolio.projects = require('./data.json').projects;
    portfolio.profile = require('./profile.json').profile;


// pug, .set method, view engine, beginning to implement html templates ...
    app.set('view engine', 'pug');
// set static stylesheets and html rendering engine
    app.use('/static', express.static('public'));
    app.use('/img', express.static('img'));

// //import and use express routes
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

// using the .get method to setup simple routes
    app.get('/', (req, res) => {
        res.render( 'index', portfolio);
        // { profile: [{heading: 'My Cool Apps', portfolio_desc: 'A portfolio of my cool apps'}]}
        console.log(portfolio.profile[0].heading);
        console.log(portfolio.profile[0].portfolio_desc);
        console.log(portfolio.projects[0].project_name);
        console.log(portfolio.projects[0].description);
        console.log(portfolio.projects[0].image_urls[0]);

    });

    app.get('/about', (req, res) => {
        res.render( 'about' );
        message.log( message.status.about );
    });

    app.get('/projects', (req, res) => {
        res.render( 'project' );
        message.log( message.status.projects );
    });

// starting a simple web server, listen port 3000
    app.listen(3000, () => {
        message.log( message.status.running );
    });

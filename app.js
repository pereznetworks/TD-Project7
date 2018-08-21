// app.js - main js for Static Porfolio Site to show off my projets

// encapsulating html snippets, status vars and a log method ...
    const message = require('./routes/message.js');

// require express framework module and create an express app object
    const express = require('express');
    const projectData = require('./data.json');
    const app = express();

// pug, .set method, view engine, beginning to implement html templates ...
    app.set('view engine', 'pug');
// set static stylesheets and html rendering engine
    app.use('/static', express.static('public'));

// using the .get method to setup 2 simple routes
// will need to remove these once actual routes are set up..
    app.get('/', (req, res) => {
        res.render( 'index' );
        message.log( message.status.home );
    });

    app.get('/about', (req, res) => {
        res.render( 'about' );
        message.log( message.status.about );
    });

// starting a simple web server, listen port 3000
    app.listen(3000, () => {
        message.log( message.status.running );
    });

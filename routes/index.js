// creating an express router
  const express = require('express');
  router = express.Router();

// using the .get method to setup simple routes
    routes.get('/', (req, res) => {
        res.render( 'index', portfolio);
        message.log( message.status.home );
        console.log(portfolio.profile[0].name);
        console.log(portfolio.projects[0].image_urls[0]);
    });

    routes.get('/about', (req, res) => {
        res.render( 'about' );
        message.log( message.status.about );
    });

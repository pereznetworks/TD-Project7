// creating an express router
const express = require('express');
const router = express.Router();

const message = require('../routes/message.js');

const portfolio = {}
portfolio.projects = require('../data.json').projects;
portfolio.profile = require('../profile.json').profile;

// routes

console.log('so we are in the index router');

  router.get('/', (req, res) => {
    message.log( message.status.home );
    res.render( 'index', portfolio);
  });

  router.get('/about', (req, res) => {
    message.log( message.status.about );
    res.render( 'about', portfolio.profile[0]);
  });


// exporting router so it can be used by express' app.js

module.exports = router;

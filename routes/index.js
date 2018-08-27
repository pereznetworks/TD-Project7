// creating an express router
const express = require('express');
const router = express.Router();

const message = require('../routes/message.js');

const portfolio = {}
portfolio.projects = require('../data.json').projects;
portfolio.profile = require('../profile.json').profile;
router.locals = portfolio
// routes

console.log('so we are in the index router');

  router.get('/', (req, res, next) => {
    message.log( message.status.home );
    res.locals = router.locals;
    res.render( 'index', res.locals.portfolio);
    next();
  });

  router.get('/about', (req, res, next) => {
    message.log( message.status.about );
    res.locals = router.locals;
    res.render( 'about', res.locals.portfolio);
    next();
  });


// exporting router so it can be used by express' app.js

module.exports = router;

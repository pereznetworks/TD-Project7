// creating an express router
const express = require('express');
const router = express.Router();

// importing my custom console and error logging module
const message = require('../routes/message.js');

// import json data
router.locals = require('../importData.js');

// 2 routes

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


// exporting 'router' so it can be used by the express app

module.exports = router;

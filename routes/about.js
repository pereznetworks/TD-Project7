// creating an express router
const express = require('express');
const router = express.Router();

const message = require('../routes/message.js');

// routes

console.log('so we are in the about router');

router.get('/about', (req, res) => {
  message.log( message.status.about );
  res.render( 'about', portfolio.profile[0]);
});

// exporting router so it can be used by express' app.js

module.exports = router;

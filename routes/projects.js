// creating an express router
const express = require('express');
const router = express.Router();

const message = require('../routes/message.js');

const portfolio = {}
portfolio.projects = require('../data.json').projects;
portfolio.profile = require('../profile.json').profile;

// routes

console.log('so we are in the projects router');

router.param('id', (req, res, next, id) => {
  if (id < portfolio.projects.length ) {
      message.log( message.status.projects);
      console.log(portfolio.projects[id].project_name);
      res.render( 'project', portfolio.projects[id] );
      next('route');
  } else {
    const err = new Error(`We're sorry, we cant find a project page with that id`);
    err.status = 404;
    err.msg = `We're sorry, we cant find a project page with that id`;
    next(err);
  }
});

router.get('/projects/:id', (req, res, next, id) => {
  next('route');
});

router.get('/projects', (req, res, next) => {
  res.render( 'projects', portfolio);
  next('route');
});

// exporting router so it can be used by express' app.js

module.exports = router;

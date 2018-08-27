// creating an express router
const express = require('express');
const router = express.Router();

const message = require('../routes/message.js');

const portfolio = {}
portfolio.projects = require('../data.json').projects;
portfolio.profile = require('../profile.json').profile;
router.locals = portfolio;

// routes

console.log('so we are in the projects router');

router.param('id', (req, res, next, id) => {
  res.locals = router.locals;
  if (id < res.locals.projects.length && id.length < 2) {
      message.log( message.status.projects);
      console.log(res.locals.projects[id].project_name);
      res.render( 'project', res.locals.projects[id]);
  } else {
      const err = new Error();
      err.status = 404;
      err.message = `We're sorry, we cant find a project page with that id`;
      message.logError(message.status.projectStatus, err.status, err.message, err.stack);
      res.locals.err = err;
      res.render(`error`, err);
  }
});

router.get('/projects/:id', (req, res, next, id) => {
  next();
});

router.get('/projects', (req, res) => {
  res.locals = router.locals;
  res.render( 'projects', res.locals);
  next();
});

// exporting router so it can be used by express' app.js

module.exports = router;

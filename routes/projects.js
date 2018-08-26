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
  if (id < portfolio.projects.length && id.length < 2) {
      message.log( message.status.projects);
      console.log(portfolio.projects[id].project_name);
      res.render( 'project', portfolio.projects[id]);
  } else {
      const err = new Error();
      err.status = 404;
      err.message = `We're sorry, we cant find a project page with that id`;
      //console.log(`\nLooks like a project page was requested. But there's been a problem:\nError code: ${err.status}: ${err.msg}\n`);
      message.logError(message.status.projectStatus, err.status, err.message, err.stack);
      res.locals.error = err;
      res.render(`error`, err);
  }
});

router.get('/projects/:id', (req, res, next, id) => {
  next();
});

router.get('/projects', (req, res) => {
  res.render( 'projects', portfolio);
  next();
});

// exporting router so it can be used by express' app.js

module.exports = router;

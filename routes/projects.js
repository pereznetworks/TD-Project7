// creating an express router
const express = require('express');
const router = express.Router();

// importing my custom console and error logging module
const message = require('../routes/message.js');

// import json data
router.locals = require('../importData.js');

// project routes

// validating the id paramater and rendering the requesting project page
router.param('id', (req, res, next, id) => {
  res.locals = router.locals;
  if (id < res.locals.projects.length && id.length < 2) {
      message.log( message.status.projects);
      console.log(res.locals.projects[id].project_name);
      res.render( 'project', res.locals.projects[id]);
  } else {
      // if id paramater is not valid, log an error and render a custom 404 page
      const projectsErr = new Error();
      projectsErr.status = 404;
      projectsErr.message = `We're sorry, we cant find a project page with that id`;
      message.logError(message.status.projectStatus, projectsErr.status, projectsErr.message, projectsErr.stack);
      res.locals.projectsErr = projectsErr;
      res.render(`errorProjects`, projectsErr);
  }
});

// route for a specific project page, triggers router.param
router.get('/projects/:id', (req, res, next, id) => {
  next();
});

// route for a specific project page, triggers router.param
router.get('/project/:id', (req, res, next, id) => {
  next();
});


// redirects for when /projects and /project are requested without an :id
router.get('/project', (req, res, next) => {
    res.redirect('/');
});

router.get('/projects', (req, res, next) => {
    res.redirect('/');
});

// exporting router so it can be used by express' app.js

module.exports = router;

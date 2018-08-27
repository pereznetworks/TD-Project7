// require modules, create an express app
const path = require('path');
const express = require('express');
const app = express();

// import express routers
const indexRouter = require('./routes/index.js');
const projectsRouter = require('./routes/projects.js');

// import json data
app.locals = require('./importData.js');

// my own custom console and error logging module
const message = require('./routes/message.js');

// setting html rendering engine to pug
app.set('view engine', 'pug');

// telling the express app to use specific internal folder paths
app.use('/static', express.static(path.join('./', 'public')));
app.use('/img', express.static(path.join('./','img')));
app.use('/projects/static/', express.static(path.join('./', 'public')));

// telling the express app which router to use for valid paths
app.use(indexRouter);
app.use(projectsRouter);
app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/project', projectsRouter);
app.use('/projects', projectsRouter);
app.use('/project/:id', projectsRouter);
app.use('/projects/:id', projectsRouter);

// telling express what to use for any paths that are not matched above
app.use((req, res, next) => {
        const err = new Error();
        err.status = 404;
        err.message = `It seems we can't find that page or path`;
        next(err);
});

// an error handler
app.use((err, req, res, next) => {
    const routeErr = err;
    if (err.status == 404 ){
      message.logError(message.status.routeStatus, err.status, err.message, err.stack);
      res.status(err.status);
      res.locals = app.locals;
      res.locals.routeErr = routeErr;
      res.render('error', routeErr);
      err.status = 0;
    }
});

app.listen(3000, () => {
  message.log( message.status.running );
});

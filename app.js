const path = require('path');
const express = require('express');
const app = express();

const indexRouter = require('./routes/index.js');
const projectsRouter = require('./routes/projects.js');

const portfolio = {}
portfolio.projects = require('./data.json').projects;
portfolio.profile = require('./profile.json').profile;
app.locals = portfolio;

const message = require('./routes/message.js');

app.set('view engine', 'pug');

app.use('/static', express.static(path.join('./', 'public')));
app.use('/img', express.static(path.join('./','img')));
app.use('/projects/static/', express.static(path.join('./', 'public')));

app.use(indexRouter);
app.use(projectsRouter);
app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/projects', projectsRouter);
app.use('/projects/:id', projectsRouter);

app.use((req, res, next) => {
      const err = new Error();
      err.status = 404;
      err.message = `It seems we can't find that page or path`;
      next(err);
});

app.use((err, req, res, next) => {
    if (err.status == 404 ){
      message.logError(message.status.routeStatus, err.status, err.message, err.stack);
      res.status(err.status);
      res.locals = app.locals;
      res.locals.error = err;
      res.render('error', err);
      err.status = 0;
    }
});

app.listen(3000, () => {
  message.log( message.status.running );
});

module.exports.portfolio = portfolio;

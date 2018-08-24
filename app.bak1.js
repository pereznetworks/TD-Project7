const path = require('path');
const express = require('express');
const app = express();

const portfolio = {}
portfolio.projects = require('./data.json').projects;
portfolio.profile = require('./profile.json').profile;

const message = require('./routes/message.js');

app.set('view engine', 'pug');

app.use('/static', express.static(path.join('./', 'public')));
app.use('/img', express.static(path.join('./','img')));
app.use('/projects/static/', express.static(path.join('./', 'public')));

app.get('/', (req, res, next) => {
  res.render( 'index', portfolio);
  next('route');
});

app.get('/about', (req, res, next) => {
  message.log( message.status.about );
  res.render( 'about', portfolio.profile[0]);
  next('route');
});

app.param('id', (req, res, next, id) => {
  if (id < portfolio.projects.length ) {
      message.log( message.status.projects);
      console.log(portfolio.projects[id].project_name);
      res.render( 'project', portfolio.projects[id] );
  }
});

app.get('/projects/:id', (req, res, next, id) => {
  // need this route here to trigger app.param('id') handler
   next('route');
});

app.get('/projects', (req, res, next) => {
  res.render( 'projects', portfolio);
  next('route');
});

// app.use((req, res, next) => {
//     const err = new Error(`Oops, excuse us, we can't find that page or path`);
//     err.status = `404`;
//     err.msg = `It seems we can't find that page or path`;
//     next(err);
// });

app.use((err, req, res, next) => {
    console.log(`path requested: ${req.url}\nerror is: ${err.status}\nmessage is: ${err.msg}\n`);
    err = new Error(`Oops, excuse us, we can't find that page or path`);
    err.status = `404`;
    err.msg = `It seems we can't find that page or path`;
    res.status(err.status);
    res.render('error', err);
});

app.listen(3000, () => {
  message.log( message.status.running );
});

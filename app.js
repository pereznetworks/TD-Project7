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

app.get('/', (req, res, next) => {
  res.render( 'index', portfolio);
  next();
});

app.get('/about', (req, res, next) => {
  message.log( message.status.about );
  res.render( 'about', portfolio.profile[0]);
  next();
});

app.param('id', (req, res, next, id) => {
  if (id < portfolio.projects.length ) {
      message.log( message.status.projects);
      console.log(portfolio.projects[id].project_name);
      res.render( 'project', portfolio.projects[id] );
      next();
  } else {
    next(err);
  }
})

app.get('/projects/:id', (req, res, next, id) => {
  // const x = portfolio.projects.length - 1;
  const validProjectsId = /[/projects]\w+/[0-4]/g
  if (req.url.match(validProjectsId)){
     next();
  } else {
    next(err);
  }
});

app.get('/projects', (req, res, next) => {
  res.render( 'projects', portfolio);
  next();
});

app.get((req, res, next) => {
  const err = new Error(`Oops, excuse us, we can't find that page or path`);
  next(err);
});

app.use((err, req, res, next) => {
  err.status = `Excuse us! We're so sorry.`;
  err.msg = `It seems we can't that page or path`;
  console.log(`\nerror is: ${err.status}\nmessage is: ${err.msg}\n`);
  res.render('error', err);
});

app.listen(3000, () => {
  message.log( message.status.running );
});

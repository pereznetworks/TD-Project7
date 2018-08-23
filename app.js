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
  next('route');
}
})

app.get('/projects/:id', (req, res, next, id) => {
  next('route');
});


app.get('/projects', (req, res, next) => {
  res.render( 'projects', portfolio);
  next('route');
});

app.use((req, res, next) => {
  console.log(req.url);
  if (req.url !== '/' && req.url !== '/about' && req.url !== '/projects' && req.url !== '/projects/0' && req.url !== '/projects/1' && req.url !== '/projects/2' && req.url !== '/projects/3' && req.url !== '/projects/4') {
    const err = new Error();
    next(err);
  } else {
    next('route');
  }

});

app.use((err, req, res, next) => {
  console.log(req.url);
  if (req.url !== '/' && req.url !== '/about' && req.url !== '/projects' && req.url !== '/projects/0' && req.url !== '/projects/1' && req.url !== '/projects/2' && req.url !== '/projects/3' && req.url !== '/projects/4') {
      err.status = `Excuse us! We're so sorry.`;
      err.msg = 'It seems there is no such page or path';
      console.log(`\nerror is: ${err.status}\nmessage is: ${err.msg}\n`);
      res.render('error', err);
    }
});

app.listen(3000, () => {
  message.log( message.status.running );
});

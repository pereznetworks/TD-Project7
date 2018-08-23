// // creating an express router
// const express = require('express');
// router = express.Router();
//
// // routes
//
//   router.get('/', (req, res) => {
//     res.render( 'index', portfolio);
//   });
//
//   router.get('/about', (req, res) => {
//     message.log( message.status.about );
//     res.render( 'about', portfolio.profile[0]);
//   });
//
//   router.param('id', (req, res, id) => {
//     if (id < portfolio.projects.length ) {
//         message.log( message.status.projects);
//         console.log(portfolio.projects[id].project_name);
//         res.render( 'project', portfolio.projects[id] );
//     }
//   });
//
//   router.get('/projects/:id', (req, res, id) => {
//     // this triggers router.param
//   });
//
//   router.get('/projects', (req, res) => {
//     res.render( 'projects', portfolio);
//   });
//
// // exporting router so it can be used by express' app.js
//
// module.exports = router;

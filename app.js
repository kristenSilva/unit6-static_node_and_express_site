// Import Express and set up `express.Router`
const express = require('express');
const app = express();

//View engine setup
app.set('view engine', 'pug');

//Set up use of static files in `public` folder
app.use('/static', express.static('public'));

//Import INDEX route
const homeRoute = require('./routes/index');
app.use(homeRoute);

//Import ABOUT route
const aboutRoute= require('./routes/about');
app.use(aboutRoute);

//Import PROJECT route
const projectRoute= require('./routes/project.js');
app.use(projectRoute);

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  })
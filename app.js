// Import Express and set up `express.Router`
const express = require('express');
const app = express();

//Import `data.JSON` file
const { projects } = require('./data.json');

//View engine setup
app.set('view engine', 'pug');
const express = require('express');
const router = express.Router();

//Import `data.JSON` file
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', {projects});
});

//GET generated error route - create and throw 500 server error
//Modeled after Treehouse Error Handling in Express Practice
router.get('/error', (req, res, next) => {

    // Log out custom error handler indication
    console.log('Custom error route called');
  
    const err = new Error();
    err.message = `Custom 500 error thrown`
    err.status = 500;

    res.status(500);
    next(err);
});

module.exports = router;
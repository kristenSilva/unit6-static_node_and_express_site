const express = require('express');
const router = express.Router();

//Import `data.JSON` file
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    //console.log('index.js working');
    res.render('index', {projects});
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    console.log('about.js working');
    res.render('about');
});

module.exports = router;
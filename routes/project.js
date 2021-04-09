const express = require('express');
const router = express.Router();

//Import `data.JSON` file
const { projects } = require('../data.json');

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    const data = {id, projects};
    res.render('project', data);
});

module.exports = router;
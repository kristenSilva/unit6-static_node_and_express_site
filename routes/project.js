const express = require('express');
const router = express.Router();

//Import `data.JSON` file
const { projects } = require('../data.json');

//redirect to home page
router.get('/projects', (req, res) => {
    res.redirect('/');
});

router.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find( project => project.id === +projectId);

    if(project){
        return res.render('project', {project});
    } else {
        const err = new Error();
        err.status = 404;
        err.message = "Looks like the project you requested doesn't exist."
        next(err);
    }
    
});

module.exports = router;
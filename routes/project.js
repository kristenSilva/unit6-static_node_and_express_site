const express = require('express');
const router = express.Router();

//Import `data.JSON` file
const { projects } = require('../data.json');

//Redirect to home page if user navigates to '/projects'
router.get('/projects', (req, res) => {
    res.redirect('/');
});

//Display project according to route parameter only if project exists
//Throw 404 error if route parameter DNE in `data.json`
router.get('/projects/:id', (req, res, next) => {
    const projectId = req.params.id;
    
    //Returns project in `data.json` that matches route param
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
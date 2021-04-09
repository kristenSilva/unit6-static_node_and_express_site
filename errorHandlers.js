//Error handler for non-existent routes
const doesNotExistError = (req, res, next) => {
    //Indicates that function is running
    console.log('Handling 404 error');
    
    //Create custom Error Object
    const err = new Error('Page Not Found');
    err.status = 404;
    err.message = "Whoops! Looks like that route does not exist.";

    //Pass error to global error handler
    next(err);
}

//Global error handler
const globalError = (req, res, next) => {
    //Indicates that function is running
    console.log('Handling global error');

    res.locals.error = err;

    //Set error status and send error message to the page
    res.status(err.status || 500);
    console.log(err.status);
    console.log(err.message);
    res.send(err.status);
}

//Export to app.js
module.exports = { doesNotExistError, globalError };
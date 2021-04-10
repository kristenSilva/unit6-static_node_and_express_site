//Error handler for non-existent routes
const doesNotExistError = (req, res, next) => {
    //Indicates that function is running
    console.log('Handling 404 error');
    
    //Create custom Error Object
    const err = new Error();
    err.status = 404;
    err.message = "Whoops! Looks like that route does not exist.";

    res.status(404);
    res.render('page-not-found', {err});
    //next(err);
}

//Global error handler
const globalError = (err, req, res, next) => {
    //Indicates that function is running
    console.log('Handling global error');
    
    if(err.status === 404){
        res.status(404);
        res.render('page-not-found', {err});
    } else{
        err.message = err.message || 'Whoops! Looks like something went wrong on the server.';
        res.status(err.status || 500);
        res.render('error', {err})
    }
}

//Export to app.js
module.exports = { doesNotExistError, globalError };
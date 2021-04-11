//Error handler for non-existent routes
const doesNotExistError = (req, res, next) => {
    //Indicates that function is running
    console.log("Oops! Looks like the page you are looking for does not exist.");
    
    const err = new Error();
    err.status = 404;
    err.message = "Oops! Looks like the page you are looking for does not exist.";

    res.status(404);
    res.render('page-not-found', {err});
}

//Global error handler
const globalError = (err, req, res, next) => {
    //Indicates that function is running
    console.log("Oops! Looks like something went wrong on the server.");
    
    //Renders 404 error display or catches other error and displays general error display
    if(err.status === 404){
        res.status(404);
        res.render('page-not-found', {err});
    } else{
        err.message = err.message || "Oops! Looks like something went wrong on the server.";
        res.status(err.status || 500);
        res.render('error', {err})
    }
}

module.exports = { doesNotExistError, globalError };
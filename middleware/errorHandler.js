
const errorHandler =(err, req, res, next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    // console.log(statusCode);
    switch (statusCode) {
        case 400:
            res.json({
                title: "Bad Request",
                message: err.message,
                stack: err.stack,
            });
            break;
        case 401:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stack: err.stack,
            });
            break;
        case 403:
            res.json({
                title: "Forbidden",
                message: err.message,
                stack: err.stack,
            });
            break;
        case 404:
            res.json({
                title: "Not Found",
                message: err.message,
                stack: err.stack,
            });
            break;
        case 500:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stack: err.stack,
            });
            break;
        default:
            res.json({
                title: "Unknown Error new",
                message: err.message,
                stack: err.stack,
            });
            break;
    }
}


module.exports = errorHandler;
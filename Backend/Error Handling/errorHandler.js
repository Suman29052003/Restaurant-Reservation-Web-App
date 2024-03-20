class ErrorHandler extends Error{
    constructor(message,statusCode){
        this.message = message;
        this.statusCode = statusCode
    }
}

export const errorHandlerMiddleWare = (err,req,res,next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || "500";

    return res.status(200).json({
        success : false,
        error: err.message
    })
}
  
export default ErrorHandler
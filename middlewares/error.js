class ErrorHandlere extends Error{

    constructor(message, statuscode){
        super(message);
        this.statuscode=statuscode;
    }
}

export const errorMiddleware = (err, req, res, next) => {

    err.message = err.message || "Internal Server Error"
    err.statuscode = err.statuscode || 500

    return res.status(err.statuscode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandlere
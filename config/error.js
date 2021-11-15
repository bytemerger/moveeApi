const config = require('./secret');

const errorHandler = (err, req, res, next) => {
    const { statusCode, message } = err;

    const response = {
        code: statusCode,
        message,
        ...(config.ENV === 'development' && { stack: err.stack }),
    };

    if (config.ENV === 'production') {
        // add a logger
    }

    return res.status(statusCode).json(response);
};

module.exports = errorHandler
const createError = require('http-errors');

function validateRequestQuery(req, allowedParams){
    const createError = require('http-errors');
    let reqParams = Object.keys(req.query);
    let notAllowed = reqParams.filter(x => !allowedParams.includes(x));
    if(notAllowed.length > 0){
        let error = {};
        for(let i=0;i<notAllowed.length;i++) {

            error[notAllowed[i]] = `The value ${notAllowed[i]} is not a required request parameter`
        }
        throw createError(400, { message: error });
    }
    return true
}
module.exports = {
    validateRequestQuery
}
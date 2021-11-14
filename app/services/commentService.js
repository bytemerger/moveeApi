const model = require('../models/comment');
const CreateError = require("http-errors")

export function getAllComments(commentObj){
    try {
        const comment = await model.create(commentObj);
        return true;
    } catch (error) {
        throw CreateError(500, error);
    }
}
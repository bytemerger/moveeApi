const { models } = require('../models/index')
const CreateError = require("http-errors")

async function createComment(id, commentObj){
    try {
        let newComment = await models.Comment.create({...commentObj, movieId: id});
        return newComment;
    } catch (error) {
        throw CreateError(500, error);
    }
}
module.exports={    
    createComment
}
const { models } = require('../models/index')
const CreateError = require("http-errors")

async function createComment(id, commentObj){
    try {
        let newComment = await models.comment.create({...commentObj, movieId: id});
        return newComment;
    } catch (error) {
        throw CreateError(500, error);
    }
}
async function listComments(id){
    try {
        let newComment = await models.comment.findAll({
            where: {
              movieId: id
            }
          });
        return newComment;
    } catch (error) {
        throw CreateError(500, error);
    }
}
module.exports={    
    createComment,
    listComments
}
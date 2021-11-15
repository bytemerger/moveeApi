const createError = require('http-errors');
const { getMoviesList, addMovieComment } = require('../services/movieService');
const { createComment, listComments } = require('../services/commentService');

async function getAllMovies(req, res) {
    try {
        let ndata = await getMoviesList();
        return res.status(200).json({ data: ndata });
    } catch (error) {
        error = createError(error);
        next(error);
    }
}
async function addMoviesComment(req, res, next) {
    console.log(req.param.id);
    try {
        let comment = await createComment(req.params.id, req.body);
        return res.status(200).json({ data: comment });
    } catch (error) {
        error = createError(error);
        next(error);
    }
}
async function getMoviesComments(req, res, next) {
    console.log(req.param.id);
    try {
        let comment = await listComments(req.params.id);
        return res.status(200).json({ data: comment });
    } catch (error) {
        error = createError(error);
        next(error);
    }
}
module.exports = {
    getAllMovies,
    addMoviesComment,
    getMoviesComments
}
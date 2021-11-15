const createError = require('http-errors');
const { getMoviesList, addMovieComment } = require('../services/movieService');
const { createComment } = require('../services/commentService');

async function getAllMovies(req, res) {
    try {
        let ndata = await getMoviesList();
        return res.status(200).json({ data: ndata });
    } catch (error) {
        throw createError(error);
    }
}
async function addMoviesComment(req, res) {
    console.log(req.param.id);
    try {
        let comment = await createComment(req.params.id, req.body);
        return res.status(200).json({ data: comment });
    } catch (error) {
        throw createError(error);
    }
}

module.exports = {
    getAllMovies,
    addMoviesComment
}
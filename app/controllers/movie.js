const createError = require('http-errors');
const { getMoviesList } = require('../services/movieService');
async function getAllMovies(req, res) {
    try {
        let ndata = await getMoviesList();
        return res.status(200).json({ data: ndata });
    } catch (error) {
        throw createError(error);
    }
}

module.exports = {
    getAllMovies
}
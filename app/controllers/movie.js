const createError = require('http-errors');
const Validator = require('validatorjs');
const { getMoviesList, addMovieComment } = require('../services/movieService');
const { createComment, listComments } = require('../services/commentService');

async function getAllMovies(req, res, next) {
    try {
        let ndata = await getMoviesList();
        return res.status(200).json({ data: ndata });
    } catch (error) {
        error = createError(error);
        next(error);
    }
}
async function addMoviesComment(req, res, next) {
    let id = req.params.id;
    let validation = new Validator({id}, {
        id: 'required|integer'
    });
    if(validation.fails()){
        let error = createError(400, { message: validation.errors.all() })
        next(error)
    }
    let formValidation = new Validator(req.body, {
        IP: 'required|string',
        body: 'required|string|max:500',
        commenter: 'required|string',
    })
    if(formValidation.fails()){
        let error = createError(400, { message: formValidation.errors.all() })
        next(error)
    }
    try {
        let comment = await createComment(req.params.id, req.body);
        return res.status(200).json({ data: comment });
    } catch (error) {
        error = createError(error);
        next(error);
    }
}
async function getMoviesComments(req, res, next) {
    let id = req.params.id;
    let validation = new Validator({id}, {
        id: 'required|integer'
    });
    if(validation.fails()){
        let error = createError(400, { message: validation.errors.all() })
        next(error)
    }
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
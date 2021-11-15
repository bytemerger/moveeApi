const router = require('express').Router();
const { getAllMovies, addMoviesComment, getMoviesComments } = require('../controllers/movie.js')

router.get('/movies', getAllMovies);
router.get('/movies/:id/comment', getMoviesComments);
router.post('/movies/:id/comment', addMoviesComment);

module.exports = router
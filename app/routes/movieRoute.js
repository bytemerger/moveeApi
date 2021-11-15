const router = require('express').Router();
const { getAllMovies, addMoviesComment } = require('../controllers/movie.js')

router.get('/movies', getAllMovies);
router.post('/movies/:id/comment', addMoviesComment);

module.exports = router
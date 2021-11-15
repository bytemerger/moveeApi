const router = require('express').Router();
const { getAllMovies } = require('../controllers/movie.js')

router.get('/movies', getAllMovies);
//router.post('/')

module.exports = router
const router = require('express').Router();
const movie = require('./movieRoute')
router.use(movie);

module.exports=router
const router = require('express').Router();
const movie = require('./movieRoute');
const character = require('./characterRoute');

router.use(movie);
router.use(character);

module.exports=router
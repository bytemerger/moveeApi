const router = require('express').Router();
const { getAllCharacters } = require('../controllers/character.js')

router.get('/characters', getAllCharacters);

module.exports = router
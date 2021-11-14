const router = require('express').Router();
const comments = require('../controllers/comment.js')
router.use(comments);

export default router;
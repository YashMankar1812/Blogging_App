const express = require('express');
const { createComment} = require('../controllers/commentController');

const router = express.Router();

router.post('/create', createComment);


module.exports = router;

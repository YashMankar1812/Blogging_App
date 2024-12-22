const express = require('express');
const { createPost,
    getPosts,
    getPostById,
    updatePostById,
    deletePostById
} = require('../controllers/postController.js');

const router = express.Router();


router.post('/create', createPost);

router.get('/', getPosts);

router.get('/:postId', getPostById);

router.put('/:postId', updatePostById);

router.delete('/:postId', deletePostById);

module.exports = router;

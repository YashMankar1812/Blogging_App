const Comment = require('../models/Comment');

// Create a comment
const createComment = async (req, res) => {
  const { content, postId } = req.body;
  const author = req.user.id;

  try {
    const newComment = await Comment.create({ content, postId, author });
    res.status(201).json(newComment);
    await Post.findByIdAndUpdate(postId, { $inc: { commentCount: 1 } });
  } catch (error) {
    res.status(400).json({ error: 'Error creating comment' });
  }
};

module.exports = { createComment };

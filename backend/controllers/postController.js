const Post = require('../models/Post');

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'email');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// Create a new post
const createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.id;  // assuming JWT middleware to get user

  try {
    const newPost = await Post.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Error creating post' });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).populate('author', 'email');
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' });
  }
};

// Update a post by ID

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: 'Error updating post' });
  }
};

// Delete a post by ID

const deletePostById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
};

module.exports = { getPosts, createPost, getPostById ,updatePostById ,deletePostById ,};

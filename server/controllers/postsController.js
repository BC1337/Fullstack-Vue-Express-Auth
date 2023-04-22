const Post = require('../models/Posts');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = new Post({ content });
    await post.save();
    res.status(201).json({ success: true, message: 'Post created successfully', data: post });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create post', error: err.message });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Populate author field with username
    res.status(200).json({ success: true, message: 'Posts retrieved successfully', data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve posts', error: err.message });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id) // Populate author field with username
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post retrieved successfully', data: post });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve post', error: err.message });
  }
};

// Update a post by ID
const updatePostById = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, { content }, { new: true });
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post updated successfully', data: post });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update post', error: err.message });
  }
};

// Delete a post by ID
const deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete post', error: err.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById
};

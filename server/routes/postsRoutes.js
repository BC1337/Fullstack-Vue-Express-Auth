const { Router } = require('express');
const postsController = require('../controllers/postsController');
const router = Router();

// Create a new post
router.post('/create-post', postsController.createPost);

// Get all posts
router.get('/get-all', postsController.getAllPosts);

// Get a single post by ID
router.get('/:id', postsController.getPostById);

// Update a post by ID
router.put('/:id', postsController.updatePostById);

// Delete a post by ID
router.delete('/:id', postsController.deletePostById);

module.exports = router;

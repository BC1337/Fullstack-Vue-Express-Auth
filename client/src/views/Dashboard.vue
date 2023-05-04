<template>
    <div>
      <div class="content-wrapper">
        <div class="content-main">
          <h2>Drop a line</h2>
          <form @submit.prevent="createPost">
            <input v-model="content" type="text" placeholder="type stuff here">
            <button class="submit-btn">Submit</button>
          </form>
  
          <div v-if="postCount > 0">
            <h3>Posts:</h3>
            <ul>
              <PostCard v-for="post in posts"
               :key="post._id"
                :post="post"
  
                @deletePost="deletePost"
                 @edit-post="editPost"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import PostCard from '../components/PostCard.vue';

  
  const content = ref('');
  const posts = ref([]);
  const postCount = ref(0);

  
  // Fetch posts data from API
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-all');
      posts.value = response.data.data;
      postCount.value = response.data.data.length;
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };
  
  // Fetch posts data on component mount
  onMounted(() => {
    fetchPosts();
  });
  
  // Create new post
  const createPost = async () => {
    try {
      const response = await axios.post('http://localhost:3000/create-post', { 
        content: content.value,
        
       });
      const newPost = response.data.data;
      posts.value.push(newPost);
      postCount.value++;
      content.value = '';
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };
  
  // Delete post
  const deletePost = async (postId) => {
  try {
    const postToDelete = posts.value.find(post => post._id === postId);
    if (!postToDelete) {
      console.error('Post not found:', postId);
      return;
    }
    const response = await axios.delete(`http://localhost:3000/${postId}/`);
    if (response.status === 200) {
      posts.value = posts.value.filter(post => post._id !== postId);
      postCount.value--;
    } else {
      console.error('Failed to delete post:', response.data.message);
    }
  } catch (error) {
    console.error('Failed to delete post:', error);
  }
};

  // Edit post
  const editPost = async (postId, updatedContent) => {
  try {
      // Send request to API to update post
      const response = await axios.put(`http://localhost:3000/${postId}`, { content: updatedContent });
      const updatedPost = response.data.data;
      
      // Update post in the local state
      const index = posts.value.findIndex(post => post._id === postId);
      posts.value[index] = updatedPost;
    } catch (error) {
    console.error('Failed to edit post:', error);
  }}

  </script>
  
  <style scoped>
 
  </style>
  
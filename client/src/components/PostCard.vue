<template>
  <div class="post-card-wrapper">
    <li class="post-card">
    <div class="post-content">
      <div v-if="!editing" class="content">{{ post.content }}</div>
      <div v-if="editing" >
        <form @submit.prevent="saveEditedPost">
          <input v-model="updatedContent" type="text" placeholder="Edit content..." />
          <button type="submit">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
    <div class="post-buttons"  v-if="userEmail === userEmail">
      <button class="edit-btn" @click="startEdit">Edit</button>
      <button class="delete-btn" @click="deletePost(post._id)">Delete</button>
    </div>
  </li>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editing: false,
      updatedContent: ''
    }
  },
  methods: {
    deletePost(postId) {
      this.$emit('deletePost', postId);
    },
    startEdit() {
      this.editing = true;
      this.updatedContent = this.post.content;
    },
    cancelEdit() {
      this.editing = false;
    },
    saveEditedPost() {
      this.$emit('edit-post', this.post._id, this.updatedContent);
      this.editing = false;
    }
  },
}
</script>

<style scoped>
.post-card-wrapper {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%; /* set desired width for the post card */
}
.post-card {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e0dfdf;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 75px;
}

.post-card .post-content {
  flex: 1;
}

.post-card .content {
  margin-bottom: 10px;
}

.post-card .delete-btn {
  cursor: pointer;
  color: red;
  font-size: 12px;
}

.post-card .edit-btn {
  cursor: pointer;
  color: #007bff;
  font-size: 12px;
  margin-right: 10px;
}

@media (max-width: 600px) {
  .post-card {
    padding: 5px;
    flex-direction: column;
  }

  .post-buttons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .post-card .delete-btn {
    margin-right: 5px;
  }

  .post-card .edit-btn {
    margin-right: 5px;
  }

  form {
    width: 100%;
  }

  input {
    width: 100%;
  }

  button {
    flex-basis: 100%;
    margin-top: 5px;
  }
}

.post-card .post-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

@media (max-width: 490px) {
  .post-card .post-buttons {
    margin-top: -5px; /* Update to move buttons up by 15px */
  }
}
</style>

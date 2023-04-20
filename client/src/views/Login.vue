<template>
  <div class="container">
    <div class="form-container">
      <form class="form" @submit.prevent="submitForm">
        <h2>Login</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
          <div v-if="emailError" class="error">{{ emailError }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
          <div v-if="passwordError" class="error">{{ passwordError }}</div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Log in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const authStore = useAuthStore();
const router = useRouter()

const submitForm = async () => {
  // reset errors
  emailError.value = '';
  passwordError.value = '';

  try {
    const res = await axios.post('http://localhost:3000/login', {
      email: email.value,
      password: password.value
    });
    const data = res.data;
   
    if (data.errors) {
      emailError.value = data.errors.email;
      passwordError.value = data.errors.password;
    }

    if (data.user) {
      router.push({ name: 'dashboard'});
      authStore.setLoggedIn(true);
      authStore.setUserEmail(email.value)
    }
  } catch (err) {
    console.log(err);
     // Handle error response from server
     if (err.response.status === 400) {
        const errors = err.response.data.errors;
        // Update errors object in data property
        this.emailError = errors.email || '';
        this.passwordError = errors.password || '';
      }
  }
  return {
          email,
          password,
          emailError,
          passwordError,
          submitForm
        }
};
</script>
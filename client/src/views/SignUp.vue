<template>
  <div class="container">
    <div class="form-container">
      <form class="form" @submit.prevent="submitForm">
        <h2>Sign up</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
          <div class="error-message">{{ emailError || ' ' }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
          <div class="error-message">{{ passwordError || ' ' }}</div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

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
    const res = await axios.post('http://localhost:3000/signup', {
      email: email.value,
      password: password.value
    });
    const data = res.data;

    if (data.errors) {
      emailError.value = data.errors.email;
      passwordError.value = data.errors.password;
    }

    if (data.user) {
      authStore.setLoggedIn(true);
      router.push({ name: 'dashboard'});
      authStore.setUserEmail(email.value)
    }
  } catch (err) {
  if (err.response && err.response.status === 400) {
    if (err.response.data.errors) {
      emailError.value = err.response.data.errors.email;
      passwordError.value = err.response.data.errors.password;
    } else if (err.response.data.message) {
      emailError.value = err.response.data.message;
    } else {
      emailError.value = 'An unknown error occurred.';
    }
  } else if (err.response && err.response.status === 401) {
    passwordError.value = 'Invalid email or password.';
  } else {
    console.log(err);
  }
 }
}
</script>
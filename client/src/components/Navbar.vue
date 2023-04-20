<template>
<nav>
    <div class="nav-left">
      <router-link to="/">Home</router-link> 
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <div class="nav-right">
      <div v-if="loggedIn">
     
        <button class="signout-btn" @click="handleSignOut" >Sign out</button>
      </div>
      <div v-if="!loggedIn" class="auth">
        <router-link to="/signup">Sign up</router-link>
        <router-link to="/login">Log in</router-link>
      </div>
     
    </div>
</nav>
  
</template>

<script setup>
import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'

const authStore = useAuthStore();

const handleSignOut = async () => {
  try {
    // Call the signOut function which makes an API request to the /logout endpoint on the backend
    await signOut();
    authStore.setLoggedIn(false);
    router.push('/');
  } catch (err) {
    console.log(err);
  }
};


const signOut = async () => {
  try {
    // Make an API request to the /logout endpoint on the backend
    await axios.get('http://localhost:3000/logout');
    console.log('Successful logout');
  } catch (err) {
    console.log(err);
  }
};

const loggedIn = computed(() => {
  return authStore.isLoggedIn; // Access loggedIn status from store
});


</script>

<style scoped>
  nav {
  height: 70px;
  margin-bottom: 55px;
  background: #EEE;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.nav-right {
  width: 100%;
  display: flex;
  margin-left: auto; 
  justify-content: space-evenly;
}

.nav-left {
  display: flex;
  width: 100%;
  min-width: 50%;
  margin-left: 5vw;
  justify-content: space-evenly;
}
.auth{
  display: flex;
  width: 100%;
  min-width: 50%;
  margin-left: 5vw;
  justify-content: space-evenly;
}

/* Media query for screens smaller than 320px */
@media (max-width: 320px) {
  .nav-left {
    flex-direction: column;
    margin-left: 0;
  }
}

.signout-btn{
  background-color: #42b983;
  color: white;
  font-size: .8em;
  border: none;
  border-radius: 4px;
  padding: 5px;
}

</style>
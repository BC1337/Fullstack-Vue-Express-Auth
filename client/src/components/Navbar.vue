<template>
  <nav>
    <div class="nav-left">
      <router-link to="/">Home</router-link> 
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <div class="nav-right">
      <div v-if="loggedIn" class="nav-right-inner">
        <div class="display-email">{{ userEmail }}</div>
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
import router from '@/router';

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
    router.push('/');
  } catch (err) {
    console.log(err);
  }
};

const loggedIn = computed(() => {
  return authStore.isLoggedIn; // Access loggedIn status from store
});

const userEmail = computed(() => authStore.userEmail)

</script>

<style scoped>
.display-email {
  font-size: .8em;
}


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
  flex-direction: row;
}

@media (max-width: 740px) {
  .auth {
    flex-direction: column;
    row-gap: 10px;
  }
}

.nav-right-inner {
  display: flex; 
  align-items: center; 
  gap: 15px;
}

.nav-left {
  display: flex;
  width: 100%;
  min-width: 50%;
  
  justify-content: space-evenly;
}

.auth {
  display: flex;
  width: 100%;
  min-width: 50%;
  justify-content: space-evenly;
}

/* Media query for screens smaller than 480px */
@media (max-width: 480px) {
  .nav-right-inner {
    width: 100%; 
  }

  .nav-left,
  .auth {
    flex-direction: column; /* Change flex-direction to column for .nav-left and .auth */
    margin-left: 0; /* Remove margin-left for .nav-left and .auth */
    align-items: center; /* Center align items for .nav-left and .auth */
  }
}

.signout-btn {
  background-color: #42b983;
  color: white;
  font-size: .8em;
  border: none;
  border-radius: 4px;
  padding: 5px;
}
</style>

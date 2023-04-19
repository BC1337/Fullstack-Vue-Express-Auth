<template>
  <Navbar />
  <router-view/>
</template>

<script setup>
  import Navbar from '@/components/Navbar'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}

.nav-left {
  display: flex;
  width: 100%;
  min-width: 50%;
  margin-left: 5vw;
}

</style>

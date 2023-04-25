<template>
  <div class="home">
    <h1>Fullstack Vue & Express</h1>
    <p>
      <span class="custom-color">Hello!</span> Thanks for checking my app out.
       If you don't want to register an account the i will leave a pre-registered
      account as placeholder details on the
      <router-link to="/login" class="custom-link">login page</router-link>.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
 /* changes color on the first word of p tag */
  .custom-color{
    color: rgb(248, 143, 4);
    font-size: 26px;
    font-weight: 800;
  }
  /* changes color of login page and redirects to login page */
  .custom-link{
    color: #42b983;
    font-weight: 800;
    cursor: pointer;
  }
  h1 {
    border-bottom: 1px solid black;
    width: 400px;
    margin: 0 auto;
  }

  p {
    width: 500px;
    margin: 50px auto;
  }

  @media (max-width: 768px) {
    /* Styles for viewport width up to 768px */
    h1 {
      width: 100%; /* Full width for smaller screens */
    }

    p {
      width: 100%; /* Adjust width for smaller screens */
      margin: 30px auto; /* Adjust margin for smaller screens */
    }
  }
</style>

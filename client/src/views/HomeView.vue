<template>
  <div class="home">
    <h1>Home Page Content</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Deleniti laborum hic exercitationem facere beatae temporibus
      in fugiat unde ex non qui dolore blanditiis, fugit neque ab
      adipisci illum maiores molestiae ipsum odit quidem assumenda.
      Possimus, ullam unde impedit dolores illo ad repudiandae
      architecto consectetur dolorem distinctio. Ducimus eligendi eum quas!
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
      width: 90%; /* Adjust width for smaller screens */
      margin: 30px auto; /* Adjust margin for smaller screens */
    }
  }
</style>

<template>

  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
  
</template>

<script>
import Navbar from './components/Nav-aside.vue'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  .grid-x{
    width: 100%;
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, h6, p{
		font-family: 'Raleway', sans-serif;
		color: #0E2431;
  }
</style>

<template>
  <div id="app">
    <nav-bar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
</style>

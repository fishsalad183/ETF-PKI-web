<template>
  <div id="app">
    <header>
      <Navigation />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
:root {
  --text-color: #1e2d2f;
  --navbar-text-color: #2e1f27;
  --upper-navbar-color: #ecb535;
  --lower-navbar-color: #f2cd75;
  --button-active-color: #562c2c;
  --additional-1-color: #27213c;
  --additional-2-color: #30323d;
}
#app {
  font-size: 24px;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
}
/* header {
  background-color: #efc050;
  margin: 0 auto;
} */
</style>

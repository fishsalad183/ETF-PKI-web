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
#app {
  font-size: 22px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

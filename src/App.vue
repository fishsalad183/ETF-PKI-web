<template lang="html">
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
  --background-color: #fcf2dc;
  --navbar-text-color: #2e1f27;
  --upper-navbar-color: #ecb535;
  --lower-navbar-color: #f2cd75;
  --button-active-color: #562c2c;
  --product-background-color-1: #27213c;
  --product-background-color-2: #30323d;
  --discount-price-color: #79da6c;
  --rust-color: #b13f06;
}
#app {
  font-size: 24px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}
html {
  background-color: var(--background-color);
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: var(--background-color);
}
</style>

<template lang="html">
  <section class="navigation container">
    <nav class="row navbar">
      <router-link to="/">
        <div class="col navbar-brand">
          <img class="logo" src="..\assets\logo_crop.png" />
        </div>
      </router-link>
    </nav>
    <nav class="row navbar navbar-menu">
      <ul>
        <li class="col nav-item">
          <router-link to="/">POČETNA</router-link>
        </li>
        <li class="col nav-item">
          <router-link to="/products">SVI PROIZVODI</router-link>
        </li>
        <li class="col nav-item">
          <router-link to="/about">O NAMA</router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
export default {
  name: 'navigation',
  props: [],
  mounted() {

  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style scoped>
.navigation {
  background-color: #efc050;
}
.navbar-menu {
  background-color: #f2cd75;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
}
.logo {
  vertical-align: middle;
  height: 100px;
}
</style>

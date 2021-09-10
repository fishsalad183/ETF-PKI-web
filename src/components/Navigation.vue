<template lang="html">
  <section class="navigation container-fluid">
    <nav class="row navbar upper-navbar">
      <ul>
        <li class="col nav-brand">
          <router-link to="/">
            <img class="logo nav-link" src="..\assets\logo_crop.png" />
          </router-link>
        </li>
      </ul>
    </nav>
    <nav class="row navbar lower-navbar">
      <ul>
        <li class="col nav-item">
          <router-link to="/" tag="button" class="btn btn-nav">
            POČETNA
          </router-link>
        </li>
        <li class="col nav-item">
          <router-link to="/products" tag="button" class="btn btn-nav">
            SVI PROIZVODI
          </router-link>
        </li>
        <li class="col nav-item">
          <router-link to="/about" tag="button" class="btn btn-nav">
            O NAMA
          </router-link>
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
  /* background-color: #efc050; */
}
.upper-navbar {
  background-color: var(--upper-navbar-color);
}
.lower-navbar {
  background-color: var(--lower-navbar-color);
}
.navbar {
  padding: 0;
}
/* .navbar-nav {
  padding: 0;
} */
/* .nav-item {
  display: inline-block;
  padding: 0;
  font-size: 26px;
} */
/* button {
  border-radius: 0%;
  width: 100%;
  height: 100%;
  font-size: 26px;
} */
/* button:hover {
  background-color: var(--upper-navbar-color);
} */
/* button:active {
  color: var(--upper-navbar-color);
  background-color: var(--button-active-color);
} */
.btn-nav {
  border-radius: 0%;
  width: 100%;
  height: 100%;
  font-size: 26px;
}
.btn-nav:focus {
  box-shadow: none;
  outline: none;
  border: none;
}
.btn-nav:hover {
  background-color: var(--upper-navbar-color);
}
.btn-nav.router-link-exact-active {
  color: var(--upper-navbar-color);
  background-color: var(--button-active-color);
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.logo {
  vertical-align: middle;
  height: 90px;
}
</style>

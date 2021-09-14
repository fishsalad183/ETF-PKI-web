<template lang="html">
  <section class="navigation container-fluid">
    <nav class="row navbar upper-navbar">
      <ul>
        <li class="col nav-brand">
          <router-link to="/">
            <img class="logo nav-link" src="..\assets\logo_crop.png" />
          </router-link>
        </li>
        <li v-if="!currentUser" class="col-8"></li>
        <li v-if="!currentUser" class="col nav-item">
          <router-link to="/login" tag="button" class="btn btn-nav">
            ULOGUJ SE
          </router-link>
        </li>
        <li v-if="currentUser" class="col-7"></li>
        <li v-if="currentUser" class="col nav-item">
          <router-link to="/cart" tag="button" class="btn btn-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            &nbsp;&nbsp;Korpa
          </router-link>
        </li>
        <li v-if="currentUser" :key="currentUser" class="col nav-item">
          <router-link to="/settings" tag="button" class="btn btn-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            &nbsp;&nbsp;{{currentUser.username}}
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
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
  },
};
</script>

<style scoped>
/* .navigation {

} */

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar {
  padding: 0;
}
.upper-navbar {
  background-color: var(--upper-navbar-color);
}
.lower-navbar {
  background-color: var(--lower-navbar-color);
}
.btn-nav {
  border-radius: 0%;
  width: 100%;
  height: 100%;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-nav:focus {
  box-shadow: none;
  outline: none;
  border: none;
}
.btn-nav:hover {
  background-color: var(--rust-color);
}
.btn-nav.router-link-exact-active {
  color: var(--upper-navbar-color);
  background-color: var(--button-active-color);
}

.logo {
  vertical-align: middle;
  height: 90px;
}
</style>

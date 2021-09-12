<template lang="html">
  <section class="login mt-5">
    <div class="row">
      <form>
        <div class="form-group">
          <div class="col-3 mx-auto my-2">
            <input type="text" class="form-control" id="userNameInput" placeholder="Korisničko ime"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-3 mx-auto my-2">
            <input type="password" class="form-control" id="passwordInput" placeholder="Lozinka"/>
          </div>
        </div>
        <button type="submit" class="col-3 mx-auto my-2 btn btn-login">Uloguj se</button>
      </form>
    </div>
    <hr class="row col-3 mx-auto my-2"/>
    <router-link to="/register" tag="button" class="row col-3 mx-auto my-2 btn btn-login">
      Kreiraj novi nalog
    </router-link>
  </section>
</template>

<script lang="js">

export default {
  name: 'login',
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
/* .login {

} */
.form-control {
  font-size: 24px;
}
.btn-login {
  font-size: 24px;
  border-radius: 0%;
  background-color: var(--lower-navbar-color);
}
.btn-login:hover {
  background-color: var(--rust-color);
}
</style>

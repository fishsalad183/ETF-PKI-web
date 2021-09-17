<template lang="html">
  <section class="login mt-5">
    <div class="row">
      <div>
        <div class="col-3 mx-auto my-2">
          <input type="text" class="form-control" id="userNameInput" placeholder="Korisničko ime" v-model="username"/>
        </div>
      </div>
      <div>
        <div class="col-3 mx-auto my-2">
          <input type="password" class="form-control" id="passwordInput" placeholder="Lozinka" v-model="password"/>
        </div>
      </div>
      <div>
        <button class="col-3 mx-auto my-2 btn btn-login" id="login" type="submit" @click="login">Uloguj se</button>
      </div>
      <div class="col-3 mx-auto my-2">
        <label v-if="errWrongCredentials" class="errorMessage">
          Pogrešni kredencijali!
        </label>
      </div>
    </div>
    <hr class="row col-3 mx-auto my-2"/>
    <router-link to="/register" tag="button" class="row col-3 mx-auto my-2 btn btn-login">
      Kreiraj novi nalog
    </router-link>
  </section>
</template>

<script lang="js">
import users from '../data/users';

export default {
  name: 'login',
  data() {
    return {
      users,
      username: '',
      password: '',
      errWrongCredentials: false,
    };
  },
  methods: {
    login() {
      const user = this.users.find((u) => u.username === this.username && u.password === this.password);
      if (!user) {
        this.errWrongCredentials = true;
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.eventBus.emit('login');
        this.$router.push('/');
      }
    },
  },
  mounted() {
    if (localStorage.getItem('currentUser')) {
      this.$router.push('/settings');
    }
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
.errorMessage {
  color: var(--rust-color);
}
</style>

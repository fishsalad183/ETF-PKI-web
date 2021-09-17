<template lang="html">
  <section class="settings container-fluid">
    <div class="my-5 row">
      <div class="col"></div>
      <button class="col-2 btn btn-update" type="submit" @click="logout">Izloguj se</button>
      <div class="col"></div>
    </div>
    <hr class="row"/>
    <div class="my-5 row">
      <div class="col">
        <div class="row my-3">
          <div class="col-2"></div>
          <label class="col-3" for="name">Ime:</label>
          <input class="col-5" id="name" type="text" :value="currentUser.name"/>
        </div>
        <div class="row my-3">
          <div class="col-2"></div>
          <label class="col-3" for="lastName">Prezime:</label>
          <input class="col-5" id="lastName" type="text" :value="currentUser.lastName"/>
        </div>
        <div class="row my-3">
          <div class="col-2"></div>
          <label class="col-3" for="phone">Telefon:</label>
          <input class="col-5" id="phone" type="text" :value="currentUser.phone"/>
        </div>
        <div class="row my-3">
          <div class="col-2"></div>
          <label class="col-3" for="address">Adresa:</label>
          <input class="col-5" id="address" type="text" :value="currentUser.address"/>
        </div>
        <div class="row mt-4 mb-2">
          <div class="col-5"></div>
          <button class="col-5 btn btn-update" id="userInfoChange" type="submit" @click="modifyUserInfo">Sačuvaj podatke</button>
        </div>
        <div class="row">
          <div class="col-5"></div>
          <div v-if="successfulUserInfoChange" class="successMessage col-5">Podaci uspešno promenjeni</div>
        </div>
      </div>
      <div class="col">
        <div class="row my-3">
          <label class="col-3" for="currentPassword">Trenutna lozinka:</label>
          <input class="col-5" id="currentPassword" type="password"/>
        </div>
        <div class="row my-3">
          <label class="col-3" for="newPassword">Nova lozinka:</label>
          <input class="col-5" id="newPassword" type="password"/>
        </div>
        <div class="row my-3">
          <label class="col-3" for="newPasswordConfirm">Potvrdi lozinku:</label>
          <input class="col-5" id="newPasswordConfirm" type="password"/>
        </div>
        <div class="row mt-4 mb-2">
          <div class="col-3"></div>
          <button class="col-5 btn btn-update" type="submit" @click="changePassword">Promeni lozinku</button>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div v-if="successfulPasswordChange" class="successMessage col-5">Lozinka uspešno promenjena</div>
          <div v-if="unsuccessfulPasswordChange" class="errorMessage col-5">Greška pri promeni lozinke</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import $ from 'jquery';
import users from '../data/users';

export default {
  name: 'settings',
  mounted() {
    if (!localStorage.getItem('currentUser')) {
      this.$router.back();
    }
  },
  data() {
    return {
      successfulUserInfoChange: false,
      successfulPasswordChange: false,
      unsuccessfulPasswordChange: false,
    };
  },
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
  },
  methods: {
    logout() {
      localStorage.removeItem('currentUser');
      this.eventBus.emit('logout');
      this.$router.push('/');
    },
    modifyUserInfo() {
      this.currentUser.name = $('#name').val();
      this.currentUser.lastName = $('#lastName').val();
      this.currentUser.phone = $('#phone').val();
      this.currentUser.address = $('#address').val();

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      const userIndex = users.findIndex((u) => u.id === this.currentUser.id);
      users.splice(userIndex, 1, this.currentUser);

      this.successfulUserInfoChange = true;
    },
    changePassword() {
      const currentPassword = $('#currentPassword').val();
      const newPassword = $('#newPassword').val();
      const newPasswordConfirm = $('#newPasswordConfirm').val();
      if (currentPassword === this.currentUser.password && newPassword === newPasswordConfirm) {
        this.currentUser.password = newPassword;

        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        const userIndex = users.findIndex((u) => u.id === this.currentUser.id);
        users.splice(userIndex, 1, this.currentUser);

        this.successfulPasswordChange = true;
        this.unsuccessfulPasswordChange = false;
      } else {
        this.successfulPasswordChange = false;
        this.unsuccessfulPasswordChange = true;
      }
    },
  },
};

</script>

<style scoped>
/* .settings {

} */
label {
  text-align: right;
}
.btn-update {
  font-size: 24px;
  border-radius: 0%;
  background-color: var(--lower-navbar-color);
}
.btn-update:hover {
  background-color: var(--rust-color);
}
.successMessage {
  color: var(--discount-price-color);
}
.errorMessage {
  color: var(--rust-color);
}
</style>

<template lang="html">
  <section class="settings my-5">
    <div class="row">
      <div class="row my-2">
        <label class="col-2" for="name">Ime:</label>
        <input class="col-2" id="name" type="text" :value="currentUser.name"/>
        <!-- <table>
          <tr>
            <td>Ime:</td>
            <td><input type="text" :value="currentUser.name"/></td>
          </tr>
          <tr>
            <td>Prezime:</td>
            <td><input type="text" :value="currentUser.lastName"/></td>
          </tr>
        </table> -->
      </div>
      <div class="row my-2">
        <label class="col-2" for="lastName">Prezime:</label>
        <input class="col-2" id="lastName" type="text" :value="currentUser.lastName"/>
      </div>
      <div class="row my-2">
        <label class="col-2" for="phone">Telefon:</label>
        <input class="col-2" id="phone" type="text" :value="currentUser.phone"/>
      </div>
      <div class="row my-2">
        <label class="col-2" for="address">Adresa:</label>
        <input class="col-2" id="address" type="text" :value="currentUser.address"/>
      </div>
      <div class="row my-2">
        <div class="col-2"></div>
        <button class="col-2 btn btn-update" type="submit">Sačuvaj podatke</button>
      </div>
    </div>
    <div class="row">

    </div>
  </section>
</template>

<script lang="js">

export default {
  name: 'settings',
  mounted() {
    if (!localStorage.getItem('currentUser')) {
      this.$router.push('/');
    }
  },
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
  },
};

</script>

<style scoped>
/* .settings {

} */
label {
  text-align: right;
  /* margin-right: 20px; */
}
.btn-update {
  font-size: 24px;
  border-radius: 0%;
  background-color: var(--lower-navbar-color);
}
.btn-update:hover {
  background-color: var(--rust-color);
}
</style>

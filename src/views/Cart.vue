<template lang="html">
  <section class="container-fluid" :key="rerenderKey">
    <div class="row mx-auto my-1 align-items-center" v-for="(item, index) in this.currentUser.cart" :key="index">
      <div class="col-1">{{item.amount}}x</div>
      <div class="col-1"></div>
      <img class="col-1 img" :src="item.product.src"/>
      <div class="col">{{item.product.name}}</div>
      <div class="col-1"></div>
      <div class="col-2">{{item.priceIncludingDiscounts}} RSD</div>
      <div class="col-1"></div>
      <button class="col-2 btn" type="submit" @click="removeFromCart(index)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        &nbsp;&nbsp;Ukloni iz korpe
      </button>
      <hr class="mt-2" />
    </div>
    <h1 v-if="orderSuccess" class="col my-5 successMessage">
      Narudžbina uspešno obavljena
    </h1>
    <div v-if="this.currentUser.cart.length > 0" class="row mx-auto my-5">
      <div class="col-6"></div>
      <div class="col-6 total">
        <div class="row align-items-center">
          <div class="col-2">Ukupno:</div>
          <div class="col-4">{{totalPrice}} RSD</div>
          <div class="col-2"></div>
          <button class="col-4 btn" type="submit" @click="order">Naruči</button>
        </div>
      </div>
    </div>
    <h2 v-if="this.currentUser.cart.length === 0 && !orderSuccess" class="col my-5">
      Korpa je prazna
    </h2>
  </section>
</template>

<script lang="js">
import users from '../data/users';

export default {
  name: 'cart',
  data() {
    return {
      rerenderKey: 0,
      orderSuccess: false,
    };
  },
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
    totalPrice() {
      return this.currentUser.cart.reduce((prev, cur) => prev + cur.priceIncludingDiscounts, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.currentUser.cart.splice(index, 1);
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

      const userIndex = users.findIndex((u) => u.id === this.currentUser.id);
      users[userIndex].cart.splice(index, 1);

      this.rerenderKey += 1;
    },
    order() {
      const cartCopy = JSON.parse(JSON.stringify(this.currentUser.cart));
      cartCopy.id = this.generateUniqueID();

      const userIndex = users.findIndex((u) => u.id === this.currentUser.id);
      users[userIndex].orders.push(cartCopy);
      users[userIndex].cart.splice(0, users[userIndex].cart.length);

      this.currentUser.orders.push(cartCopy);
      this.currentUser.cart.splice(0, this.currentUser.cart.length);
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

      this.orderSuccess = true;
      this.rerenderKey += 1;
    },
  },
};

</script>

<style scoped>
.img {
  width: 10%;
  height: 10%;
}
.total {
  padding: 30px;
  border: 2px solid;
  border-color: var(--product-background-color-1);
}
.btn {
  font-size: 24px;
  border-radius: 0%;
  background-color: var(--lower-navbar-color);
}
.btn:hover {
  background-color: var(--rust-color);
}
.successMessage {
  color: var(--discount-price-color);
}
</style>

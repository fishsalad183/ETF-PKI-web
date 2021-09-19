<template lang="html">
  <section class="container-fluid" :key="rerenderKey">
    <section v-if="this.orders.length > 0">
      <div class="row mx-auto my-1 align-items-center">
        <h2 class="col-1">ID</h2>
        <h2 class="col-1"></h2>
        <h2 class="col-2">Proizvodi</h2>
        <h2 class="col-1"></h2>
        <h2 class="col-2">Vrednost</h2>
        <h2 class="col"></h2>
      </div>
      <hr/>
      <div class="row mx-auto my-1 align-items-center" v-for="(order, index) in this.orders" :key="index">
        <div class="col-1">{{order.id}}</div>
        <div class="col-1"></div>
        <div class="col-2">
          <div v-for="(item, index2) in order" :key="index2">
            {{item.amount}} x {{item.product.name}}
            <br/>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-2">{{totalPrice(order)}} RSD</div>
        <div class="col-1"></div>
        <button class="col-2 btn btn-approve" type="submit" @click="approve(order.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          &nbsp;&nbsp;Odobri
        </button>
        <button class="col-2 btn btn-reject" type="submit" @click="reject(order.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
          &nbsp;&nbsp;Odbij
        </button>
        <hr class="mt-2" />
      </div>
    </section>
    <h2 v-else class="col my-5">
      Nema nijedna narudžbina
    </h2>
    <!-- <h1 v-if="orderSuccess" class="col my-5 successMessage">
      Narudžbina uspešno obavljena
    </h1> -->
  </section>
</template>

<script lang="js">
import users from '../data/users';

export default {
  name: 'orders',
  data() {
    return {
      rerenderKey: 0,
    };
  },
  computed: {
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
    orders() {
      return users
        .filter((user) => user.orders)
        .map((user) => user.orders)
        .reduce((prev, cur) => prev.concat(cur), []);
    },
  },
  methods: {
    totalPrice(order) {
      return order.reduce((prev, cur) => prev + cur.priceIncludingDiscounts, 0);
    },
    approve(id) {
      users
        .filter((user) => user.orders)
        .forEach((user) => user.orders.splice(user.orders.findIndex((order) => order.id === id), 1));
      this.orders.splice(this.orders.findIndex((order) => order.id === id), 1);

      this.rerenderKey += 1;
    },
    reject(id) {
      users
        .filter((user) => user.orders)
        .forEach((user) => user.orders.splice(user.orders.findIndex((order) => order.id === id), 1));
      this.orders.splice(this.orders.findIndex((order) => order.id === id), 1);

      this.rerenderKey += 1;
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 24px;
  border-radius: 0%;
  background-color: var(--lower-navbar-color);
}
.btn:hover {
  background-color: var(--rust-color);
}
.btn-approve {
  background-color: #49CC28;
}
.btn-approve:hover {
  background-color: #3DAA22;
}
.btn-reject {
  background-color: #F51400;
}
.btn-reject:hover {
  background-color: #CC1100;
}
</style>

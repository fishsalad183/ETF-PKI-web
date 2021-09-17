<template lang="html">
  <section class="container">
    <div class="row mt-5">
      <div class="col-md-4 my-3">
        <HexagonImg :imageSrc="this.product.src"/>
        <br/><br/>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-7 mt-5">
        <h1>{{this.product.name}}</h1>
        <br/>
        <p class="description">{{this.product.description}}</p>
        <br/><hr/><br/>
        <h2 class="description">
          <span v-if="!!this.product.discountPrice">
            Cena:
            <span class="old-price">{{this.product.price}}</span>
            <span class="new-price">&nbsp;{{this.product.discountPrice}}</span>
            RSD
          </span>
          <span v-else>
            Cena: {{this.product.price}} RSD
          </span>
          <div v-if="currentUser.type === 'customer'" class="my-3">
            Količina:&nbsp;
            <select class="form-select-md" id="amount">
              <option v-for="n in 10" :selected="n === 1 ? 'selected' : false" :key="n" :value="n">{{n}}</option>
            </select>
            <br/>
            <button class="col-md-4 my-3 btn" id="addToCart" type="submit" @click="addToCart">Dodaj u korpu</button>
          </div>
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import $ from 'jquery';
import CartItem from '../data/cartItem';
import products from '../data/products';
import users from '../data/users';
import HexagonImg from '../components/HexagonImg.vue';

export default {
  name: 'product',
  components: {
    HexagonImg,
  },
  props: {
    id: { type: [Number, String] },
    validator(value) {
      return Number.isInteger(Number(value));
    },
  },
  computed: {
    product() {
      const { id } = this;
      return products.find((p) => p.id === +id);
    },
    currentUser() {
      return JSON.parse(localStorage.getItem('currentUser'));
    },
  },
  methods: {
    addToCart() {
      const amount = Number($('#amount option:selected').text());

      this.currentUser.cart.push(new CartItem(this.product, amount));
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      const userIndex = users.findIndex((u) => u.id === this.currentUser.id);
      users.splice(userIndex, 1, this.currentUser);

      this.$router.push('/cart');
    },
  },
};

</script>

<style scoped>
.description {
  font-size: 1.05em;
  text-align: justify;
}
.old-price {
  text-decoration: line-through;
  color: #E84855;
}
.new-price {
  color: var(--discount-price-color);
}
.btn {
  font-size: 24px;
  border-radius: 0%;
  background-color: var(--lower-navbar-color);
}
.btn:hover {
  background-color: var(--rust-color);
}
</style>

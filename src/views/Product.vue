<template lang="html">
  <section class="container product">
    <div class="row mt-5">
      <div class="col-md-4">
        <HexagonImg :imageSrc="this.product.src"/>
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
          <form class="my-3">
            Količina:&nbsp;
            <select class="form-select-md">
              <option v-for="n in 10" :selected="n === 1 ? 'selected' : false" :key="n" :value="n">{{n}}</option>
            </select>
            <br/>
            <button type="submit" class="col-md-4 my-3 btn">Dodaj u korpu</button>
          </form>
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import products from '../data/products';
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
  },
};

</script>

<style scoped>
/* .product {

} */
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

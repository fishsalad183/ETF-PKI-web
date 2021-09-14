<template lang="html">
  <section class="home container">
    <div id="welcomeCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- <div class="carousel-indicators">
        <button v-for="(product, index) in carouselProducts" :key="index" class="carousel-indicator" :class="(index == 0) ? 'active' : ''" type="button" data-bs-slide-to="{{index}}"></button>
      </div> -->
      <div class="carousel-inner">
        <!-- <div v-for="(product, index) in carouselProducts" :key="index" class="carousel-item" :class="(index == 0) ? 'active' : ''" :style="{'background-image': 'url(' + product.src + ')'}"> -->
        <div v-for="(product, index) in carouselProducts" :key="index" class="carousel-item" :class="(index == 0) ? 'active' : ''" :style="`background-image: url(${product.src})`">
          <div class="carousel-caption">
            <h1>AKCIJA</h1>
            <br/><br/>
            <h2>{{product.name}}</h2>
            <h2>
              <span class="old-price">{{product.price}}</span>
              <span class="new-price">&nbsp;{{product.discountPrice}}</span>
              RSD
            </h2>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>
</template>

<script>
// import $ from 'jquery';
import 'jquery';
import products from '../data/products';

export default {
  name: 'HomePage',
  data() {
    return {
      products,
    };
  },
  computed: {
    carouselProducts: () => {
      const productsCopy = JSON.parse(JSON.stringify(products)); // Copy array so that the original doesn't get modified by sorting
      return productsCopy.sort(() => 0.5 - Math.random()).filter((p) => !!p.discountPrice).slice(0, 4); // Get 4 random items with discounts
    },
  },
  mounted() {
    // $(document).ready(() => {
    //   $('#welcomeCarousel').find('.carousel-indicator').first().addClass('active');
    //   $('#welcomeCarousel').find('.carousel-item').first().addClass('active');
    // });
    // if (!this.carouselActive) {
    //   document.querySelector('.carousel-indicator').classList.add('active');
    //   document.querySelector('.carousel-item').classList.add('active');
    //   this.carouselActive = true;
    // }
  },
};
</script>

<style scoped>
.carousel {
  background: linear-gradient(to right bottom, var(--product-background-color-1), var(--product-background-color-2));
  margin-top: 4rem;
}
.carousel-caption {
  left: 50%;
  top: 20%;
  color: var(--upper-navbar-color);
  bottom: 3rem;
  z-index: 10;
}
.carousel-caption h1 {
  font-size: 46px;;
}
.old-price {
  text-decoration: line-through;
  color: #E84855;
}
.new-price {
  color: var(--discount-price-color);
}
.carousel-item {
  height: 32rem;
  max-width: 100vw;
  background-size: 35%;
  background-position: 20% center;
  background-repeat: no-repeat;
}
</style>

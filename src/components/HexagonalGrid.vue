<template lang="html">
  <section>
    <div class="grid">
      <ul id="hexGrid">
        <li class="hex" v-for="(product, index) in products" :key="index">
          <div class="hexIn">
            <router-link class="hexLink" :to="`/product/${product.id}`">
              <div class="imgBackground img" :style="`background-image: url(${product.src})`"></div>
              <h1 class="hexTitle">{{product.name}}</h1>
              <p v-if="!!product.discountPrice" class="hexText newPrice">
                {{product.discountPrice}} RSD
              </p>
              <p v-else class="hexText">{{product.price}} RSD</p>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
import products from '../data/products';

export default {
  name: 'hexagonal-grid',
  data() {
    return {
      products,
    };
  },
};

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  font-family: sans-serif;
  list-style-type: none;
}

.hex {
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  transition: all 0.5s;
  backface-visibility: hidden;
  will-change: transform;
  transition: all 0.5s;
}
.hex::after {
  content: '';
  display: block;
  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
}
.hexIn {
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transform: rotate3d(0,0,1,-60deg) skewY(30deg);
  transition: all 0.5s;
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
            transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
}
.hex h1, .hex p {
  width: 100%;
  padding: 5%;
  font-size: 1.2em;
  box-sizing: border-box;
  font-weight: 300;
  opacity: 1;
}
.hexTitle {
  bottom: 25%;
  color: var(--upper-navbar-color);
  text-align: center;
  z-index: 1;
}
.hexText {
  color: var(--lower-navbar-color);
  bottom: 10%;
  text-align: center;
}
.oldPrice {
  text-decoration: line-through;
}
.newPrice {
  color: var(--discount-price-color);
}

.hex h1:before, .hex h1:after {
  display: inline-block;
  margin: 0 0.5em;
  width: 0.25em;
  height: 0.03em;
  background: white;
  /* content: ''; */
  vertical-align: middle;
  transition: all 0.3s;
  text-align: center;
}

.img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center 25%;
  background-size: 50%;
  background-repeat: no-repeat;
  overflow: hidden;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.img:before, .img:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  opacity: 0;
  transition: opacity 0.5s;
}

/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
.hex:nth-child(2n+1) .imgBackground {
  background-color: rgba(39, 33, 60, 1);
}
.hex:nth-child(2n) .imgBackground {
  background-color: rgba(48, 50, 61, 1);
}
.hex:hover .imgBackground {
  background-color: var(--button-active-color);
  transition: 0.5s all;
}
.hex .imgBackground {
  transition: 0.5s all;
}

@media (min-width: 1001px) { /* <- 4-3  hexagons per row */
  #hexGrid {
    padding-bottom: 5.5%;
    font-size: 24px;
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n+5) { /* first hexagon of even rows */
    margin-left: 12.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1000px) and (min-width: 601px) { /* <- 3-2  hexagons per row */
  #hexGrid {
    padding-bottom: 7.4%;
    font-size: 16px;
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4) { /* first hexagon of even rows */
    margin-left: 16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) { /* <- 2-1  hexagons per row */
  #hexGrid {
    padding-bottom: 11.2%;
    font-size: 12px;
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n+3) { /* first hexagon of even rows */
    margin-left:25%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 8px;
    }
}
</style>

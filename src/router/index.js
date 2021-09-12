import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import Product from '../views/Product.vue';
import Login from '../views/Login.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});

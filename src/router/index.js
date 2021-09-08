import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ProductsPage from '../views/Products.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage,
    },
  ],
});

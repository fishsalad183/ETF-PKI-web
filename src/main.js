import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

createApp({
  render: () => h(App),
})
  .use(router)
  .mount('#app');

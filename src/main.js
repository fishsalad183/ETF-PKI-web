import { createApp, h } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

const eventBus = mitt();

const app = createApp({
  render: () => h(App),
});
app.config.globalProperties.eventBus = eventBus;
app.use(router);
app.mount('#app');

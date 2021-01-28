import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/font-awesome.min.css';
import '@/assets/css/main.css';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');

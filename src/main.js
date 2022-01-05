import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

const mainApp = createApp(App);
mainApp.config.globalProperties.$axios = axios;
library.add(fas);
mainApp.use(router, axios, VueAxios);
mainApp.component('font-awesome-icon', FontAwesomeIcon);
// mainApp.config.productionTip = false;
mainApp.mount('#app');

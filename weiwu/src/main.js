import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';

Vue.config.productionTip = false;

import './assets/js/rem.js';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';

Vue.use(Vant);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

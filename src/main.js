import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/common/resize';
import '@/common/normalize.css';

Vue.prototype.$http = axios;
// iconfont全选图标
// var span = document.querySelectorAll('.icon-cover');
// for (var i = 0, len = span.length; i < len; i++) {
//      console.log(span[i].querySelector('span').click());

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

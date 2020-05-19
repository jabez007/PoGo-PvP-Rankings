import Vue from 'vue';
import './plugins/vue.prototype';
import './plugins/vuetify';
import App from './App.vue';
import router from './plugins/router';

Vue.config.productionTip = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

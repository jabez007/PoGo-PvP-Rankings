import Vue from 'vue';
import './plugins/vuetify';
import Pokedex from 'pokedex-promise-v2';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = true;
Vue.prototype.$pokedex = new Pokedex();
Vue.prototype.$typesEffective = {
  def: {
    immune: 0.390625,
    strong: 0.625,
    weak: 1.6,
    vulnerable: 2.56,
  },
};

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

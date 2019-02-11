import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { toCurrency } from "./lib/filter";

Vue.config.productionTip = false

// Global filter for currencies
Vue.filter('toCurrency', toCurrency);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

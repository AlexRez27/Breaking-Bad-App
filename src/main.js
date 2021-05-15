/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import VueHorizontalTimeline from 'vue-horizontal-timeline'

Vue.use(Vuelidate)
Vue.use(VueHorizontalTimeline)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

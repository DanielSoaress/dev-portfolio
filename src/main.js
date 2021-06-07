import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Particles from "particles.vue";
import ScrollAnimation from "./directive/scrollanimation"
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.directive('scrollanimation', ScrollAnimation)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Particles);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

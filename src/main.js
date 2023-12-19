import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {router} from "@/router";
import VueRouter from "vue-router";
import { store } from '@/store'


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

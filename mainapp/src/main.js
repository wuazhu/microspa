import Vue from 'vue'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import './elements'
import startQiankun from './micro/index'
import './assets/styles/index.styl'

startQiankun()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#main-app")

console.log(
  /*
   *                                                     __----~~~~~~~~~~~------___
   *                                    .  .   ~~//====......          __--~ ~~
   *                    -.            \_|//     |||\\  ~~~~~~::::... /~
   *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
   *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
   *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
   *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
   *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
   *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
   *           '         ~-|      /|    |-~\~~       __--~~
   *                       |-~~-_/ |    |   ~\_   _-~            /\
   *                            /  \     \__   \/~                \__
   *                        _--~ _/ | .-~~____--~-/                  ~~==.
   *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
   *                                  -_     ~\      ~~---l__i__i__i--~~_/
   *                                  _-~-__   ~)  \--______________--~~
   *                                //.-~~~-~_--~- |-------~~~~~~~~
   *                                       //.-~~~--\
   *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   * 
   *                               神兽保佑            永无BUG
   */
)
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

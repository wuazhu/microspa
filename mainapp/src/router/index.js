import Vue from "vue"
import VueRouter from "vue-router"
import { injectTable } from '../shared'
const Home = () => import(/* webpackChunkName: "portal" */ "../views/Home.vue")
const Login = () => import(/* webpackChunkName: "portal" */ "../views/Login.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      withoutLayout: true
    }
  }
]

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
})

// 主应用路由挂载到shared
injectTable.injectRouter(router)

export default router

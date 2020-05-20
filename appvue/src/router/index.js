import Home from "../views/Home.vue"

const routes = [
  {
    path: "/",
    name: "App1Home",
    component: Home
  },
  {
    path: "/list",
    name: "App1List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue")
  },
  {
    path: "/communication",
    name: "Communication",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Communication.vue")
  }
]


export default routes

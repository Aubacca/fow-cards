import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cards from "../views/Cards.vue";
import Home2Component from "../views/Home2";
import Cards2 from "../views/Cards2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/2",
    name: "Home2",
    component: Home2Component,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/cards2",
    name: "Cards2",
    component: Cards2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

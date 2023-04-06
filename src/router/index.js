import Vue from "vue";
import VueRouter from "vue-router";

import MainPageView from "../views/MainPageView.vue"
import TourPageView from "../views/TourPageView.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: MainPageView,
  },
  { name: "tour", path: "/tour/:id", component: TourPageView},
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;

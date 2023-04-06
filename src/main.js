import Vue from 'vue'
import App from './App.vue'

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from '@/components/FooterComponent.vue'
import store from "./store";
import router from './router';
import "./filters";
Vue.config.productionTip = true
Vue.component("nav-bar-component", NavBarComponent);
Vue.component("footer-component", FooterComponent);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

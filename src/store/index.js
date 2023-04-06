import Vue from "vue";
import Vuex from "vuex";

import links from "./links";
import tours from "./tours";

Vue.use(Vuex);

const store = new Vuex.Store({
   modules: {
      links,
    tours,
   }
});
export default store
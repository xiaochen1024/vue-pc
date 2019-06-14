import todo from "./todo";
import home from "./home";
import permission from "./permission";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    home,
    permission
  }
});

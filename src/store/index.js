import todo from "./todo";
import home from "./home";
import permission from "./permission";
import init from "./init";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    init,
    todo,
    home,
    permission
  }
});

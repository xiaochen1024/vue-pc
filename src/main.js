import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import { post, get, put } from "./utils/request";
import "./plugins/element.js";
// import { getToken } from "@/utils/auth";

import store from "./store";

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$put = put;

const whiteList = ["/login", "/notFound"];
const findPath = function(menus, path) {
  return (
    menus &&
    menus.find(v => {
      if (v.path === path) {
        return true;
      } else {
        return v.children && findPath(v.children, path);
      }
    })
  );
};

router.beforeEach(async (to, from, next) => {
  // const token = getToken();
  const token = true; //假设token有了
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    if (token) {
      if (store.state.permission.menus.length === 0) {
        await store.dispatch("permission/fetchPermission");
      }
      const hasPath = findPath(store.state.permission.menus, to.fullPath);
      hasPath ? next() : next({ path: "/notFound" });
    } else {
      next({ path: "/login" });
    }
  }
});

new Vue({
  router,
  store,
  render(h) {
    return h(App);
  }
}).$mount("#app");

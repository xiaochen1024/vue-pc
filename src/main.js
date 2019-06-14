import Vue from "vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import App from "./App.vue";
import router from "./routes";
import { post, get, put } from "./utils/request";
import "./plugins/element.js";
import "./styles/index.scss";
// import { getToken } from "@/utils/auth";

import store from "./store";

NProgress.configure({ showSpinner: false });

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
  NProgress.start();
  // const token = getToken();
  const token = true; //假设token有了
  if (whiteList.indexOf(to.path) !== -1) {
    next();
    NProgress.done();
  } else {
    if (token) {
      try {
        if (store.state.permission.menus.length === 0) {
          await store.dispatch("permission/fetchPermission");
        }
        const hasPath = findPath(store.state.permission.menus, to.fullPath);
        hasPath ? next() : next({ path: "/notFound" });
      } catch (error) {
        // comsole.log(error)
      } finally {
        NProgress.done();
      }
    } else {
      next({ path: "/login" });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render(h) {
    return h(App);
  }
}).$mount("#app");

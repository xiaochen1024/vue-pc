import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Todo = require("./pages/Todo.vue");

const routes = [{ path: "/todo", components: Todo }];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;

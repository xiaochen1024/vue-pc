import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = require("./pages/Home.vue");
const Todo = require("./pages/Todo.vue");
const Test = require("./pages/Test.vue");
const NotFound = require("./pages/NotFound.vue");

export const dynamicRoutes = [
  { path: "/notFound", components: NotFound },
  {
    path: "/",
    components: Home,
    children: [
      {
        path: "/test",
        components: Test,
      },
      {
        path: "/test12",
        components: Todo,
      }
    ]
  },
  { path: "/todo", components: Todo, icon: "todo" }
];

const router = new VueRouter({
  mode: "history",
  routes: dynamicRoutes
});

export default router;

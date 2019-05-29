import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Hello = require('./pages/Hello.vue')
const Test = require('./pages/Test.vue')

const routes = [
  { path: '/hello', components: Hello  },
  { path: '/test', components: Test },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router
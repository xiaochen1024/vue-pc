import Vue from 'vue'
import App from 'pages/App.vue'
import router from './routes'
import { post, fetch, put } from './utils/http'
import './plugins/element.js'

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$put = put;


new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './config/routes'

new Vue({
  el: '#app',
  router, // 引入路由
  render: h => h(App)
})

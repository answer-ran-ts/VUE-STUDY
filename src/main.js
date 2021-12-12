import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tools from './utils/index'
import * as filters from './utils/filter'
import api from './api/request'
// 全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]) // 插入过滤器名和对应方法
})
Vue.config.productionTip = false
Vue.prototype.$tools = tools
Vue.prototype.$http = api
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

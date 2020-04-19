import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'
Vue.use(ElementUI)
// 将API方法绑定到全局
Vue.prototype.$api = api

const App = (r) => require.ensure([], () => r(require('./App.vue')), 'app')
// const root = document.createElement('div');
// document.body.appendChild(root);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

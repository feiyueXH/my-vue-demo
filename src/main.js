import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

const App = r => require.ensure([], () => r(require('./App.vue')), 'app');
// const root = document.createElement('div');
// document.body.appendChild(root);
new Vue({
  router,
  store,
  render:(h) => h(App)
}).$mount('#app')
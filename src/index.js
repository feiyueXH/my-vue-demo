import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


console.log(router);
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
  router,
  store,
  render:(h) => h(App)
}).$mount(root)
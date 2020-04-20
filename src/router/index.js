import Vue from 'vue'
import Router from 'vue-router'
/**
 * 重写路由的push方法,一直提示报错很烦
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

/**
 * 重写路由的push方法,一直提示报错很烦
 */
// eslint-disable-next-line no-unused-vars
const replacePush = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return routerPush.call(this, location).catch((error) => error)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: (r) =>
        require.ensure(
          [],
          () => r(require('@/views/Login/Login_1.0.0')),
          'login_1.0.0'
        )
    },
    {
      path: '/home',
      name: 'home',
      component: (r) =>
        require.ensure(
          [],
          () => r(require('@/views/Home/Home_1.0.0')),
          'home_1.0.0'
        )
    },
    {
      path: '/about',
      name: 'about',
      component: (r) =>
        require.ensure(
          [],
          () => r(require('@/views/About/About_1.0.0')),
          'about_1.0.0'
        )
    }
  ]
})

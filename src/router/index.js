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

// /**
//  * 加载view组件
//  * @param {*} name 别名
//  * @param {*} view 视图名
//  * @param {*} version 版本号
//  */
function loadView(name, path) {
  // console.log('>>>>>>>>>>>>>>>>view:', view)
  // return r => require.ensure([], () => r(require(`@/views/${view}/${view}_${version}`)), `${view}_${version}`)
  return () => import(/* webpackChunkName: "[request]" */ path)
  // return () => import(`@/views/${view}/${view}_${version}.vue`)
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "[request]" */ '@/views/Login/Login_1.0.0')
  }
]

export default new Router({
  mode: 'hash',
  routes: routes
  // routes: [
  //   {
  //     path: '/login',
  //     name: 'login',
  //     // component: (r) =>
  //     //   require.ensure(
  //     //     [],
  //     //     () => r(require('@/views/Login/Login_1.0.0')),
  //     //     'login_1.0.0'
  //     //   )
  //     component: loadView('login', '@/views/Login/Login_1.0.0.vue')
  //   }
  //   // {
  //   //   path: '/home',
  //   //   name: 'home',
  //   //   component: (r) =>
  //   //     require.ensure(
  //   //       [],
  //   //       () => r(require('@/views/Home/Home_1.0.0')),
  //   //       'home_1.0.0'
  //   //     )
  //   //   // component: loadView('home','Home','1.0.0')
  //   // },
  //   // {
  //   //   path: '/about',
  //   //   name: 'about',
  //   //   component: (r) =>
  //   //     require.ensure(
  //   //       [],
  //   //       () => r(require('@/views/About/About_1.0.0')),
  //   //       'about_1.0.0'
  //   //     )
  //   //   // component: loadView('index','Index','1.0.0')
  //   // }
  // ]
})

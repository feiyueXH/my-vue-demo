import Vue from 'vue'
import Router from 'vue-router'
import ConstantRouterMap from './routers'

const routerMethods = ['push', 'replace']
routerMethods.forEach((method) => {
  const originalCall = Router.prototype[method]
  Router.prototype[method] = function(location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject)
    }
    return originalCall.call(this, location).catch((err) => err)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: ConstantRouterMap
})

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**
 * 加载view组件
 * @param {*} name 别名
 * @param {*} view 视图名
 * @param {*} version 版本号
 */
function loadView(name,view,version) {
    console.log(">>>>>>>>>>>>>>>>view:",view);
    // return r => require.ensure([], () => r(require(`@/views/${view}/${view}_${version}`)), `${view}_${version}`)
    return () => import(/* webpackChunkName: "[request]" */ `@/views/${view}/${view}_${version}`)
    // return () => import(`@/views/${view}/${view}_${version}.vue`)
}

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: loadView('login','Login','1.0.0')
        },
        {
            path: '/home',
            name: 'home',
            component: loadView('home','Home','1.0.0')
        },
        {
            path: '/about',
            name: 'about',
            component: loadView('index','Index','1.0.0')
        }
    ]
})
const constRouterMap = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/404',
    component: () => import('@/pages/Page404.vue')
  },
  {
    path: '/init',
    component: () => import('@/pages/Init.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
export default constRouterMap

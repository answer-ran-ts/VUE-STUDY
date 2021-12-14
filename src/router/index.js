import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('../views/dashboard/index.vue'),
    meta: { title: '首页' },
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/404'),
    meta: { title: '404界面' },
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }) /* 记录位置 */,
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

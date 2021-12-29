import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('../views/Login'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('../views/Login'),
    hidden: true
  },
  {
    path: '/home',
    component: () => import('../views/Home'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/404.vue'),
    meta: { title: '404界面' },
    hidden: true
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    mode: 'history',
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

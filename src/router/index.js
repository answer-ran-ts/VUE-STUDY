import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/404'),
    meta: { title: '404界面' },
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashborad',
    // 渲染二级路由，也就是说登录页首先进入 '/' Layout作为一级路由被渲染，此时加载layout组件
    // layout组件根据<router-view />标签判断是否展示二级路由
    // layout的原理就是点击改变侧边栏时，根据当前的path，将key动态的绑定在router-view上，从而动态的加载右侧二级路由，即children组件
    children: [{
      path: '/dashborad',
      name: 'Dashboard',
      component: () => import('../views/dashboard/index.vue'),
      meta: { title: 'Dashboard' }
    }]
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

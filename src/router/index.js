import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Login/index')
  },
  {
    path: '/login',
    component: () => import('../views/Login/index')
  },
  {
    path: '/home',
    component: () => import('../views/TestDemo/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

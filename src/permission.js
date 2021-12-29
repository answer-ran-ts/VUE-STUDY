import router from './router'
import store from './store'
import {
  getToken
} from '@/utils/auth'

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      // 尝试获取当前用户信息,如果存在则进入下一个钩子
      // 当前项目暂时只需要验证token即可
      try {
        await store.dispatch('getInfo')
        next()
      } catch (error) {
        await store.dispatch('resetToken')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

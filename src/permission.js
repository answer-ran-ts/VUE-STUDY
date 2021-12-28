import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      try {
        await store.dispatch('user/getInfo')
        next()
      } catch (error) {
        await store.dispatch('user/resetToken')
        console.log('error')
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

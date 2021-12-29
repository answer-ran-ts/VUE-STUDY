import { login, logout, getInfo } from '@/api/request/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

export default new Vuex.Store({
  state: state,
  mutations: {
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    // 登录
    login ({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username: username.trim(),
          password: password
        })
          .then((response) => {
            const { data } = response
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 获取用户信息
    getInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then((response) => {
            const { data } = response
            if (!data) {
              return reject(new Error('验证失败,请重新登录'))
            }
            const { name } = data
            commit('SET_NAME', name)
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    //  退出登录
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            removeToken() // must remove  token  first
            resetRouter()
            commit('RESET_STATE')
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 移除token
    resetToken ({ commit }) {
      return new Promise((resolve) => {
        removeToken()
        commit('RESET_STATE')
        resolve()
      })
    }
  }
})

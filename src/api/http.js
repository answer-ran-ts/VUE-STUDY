import axios from 'axios'
import Qs from 'qs'
import storage from '../utils/storage'
const http = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    config.data = Qs.stringify(config.data)
    const token = storage.get('case-comunity')
    if (token) {
      config.headers.common.Authorization = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
http.interceptors.response.use(
  (response) => {
    const { status } = response.data

    if (status === 2) {
      localStorage.removeItem('zjwl')
    }

    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http

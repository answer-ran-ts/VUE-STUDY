import $http from '../http'

export function login (data) {
  return $http({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return $http({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return $http({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

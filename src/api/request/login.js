import $http from '../http'

export function getAuthCode (data) {
  return $http({
    url: '/case-platform-h5/authByUser',
    method: 'POST',
    data
  })
}

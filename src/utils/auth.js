import storage from '@/utils/storage'

const TokenKey = 'h5-test-token'

export function getToken () {
  return storage.get(TokenKey)
}

export function setToken (token) {
  return storage.set(TokenKey, token)
}

export function removeToken () {
  return storage.remove(TokenKey)
}

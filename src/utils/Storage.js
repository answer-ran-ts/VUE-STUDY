const storage = {}
/**
 * put 把数据放到本地存储
 * @param {*} key
 * @param {*} value
 */
storage.set = function (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * get 获取本地存储数据
 * @param {*} key
 */
storage.get = function (key) {
  var obj = window.localStorage.getItem(key)
  if (obj && obj !== 'undefined' && obj !== 'null') {
    return JSON.parse(obj)
  }
  return ''
}

/**
 * remove 清除本地数据
 * @param {*} key
 */
storage.remove = function (key) {
  if (key) {
    window.localStorage.removeItem(key)
  } else {
    for (var i in arguments) {
      window.localStorage.removeItem(arguments[i])
    }
  }
}

/**
 * seek 检查本地是否有值
 * @param {*} key
 */
storage.seek = function (name) {
  if (!name) return
  return Object.prototype.hasOwnProperty.call(window.localStorage, name)
}
export default storage

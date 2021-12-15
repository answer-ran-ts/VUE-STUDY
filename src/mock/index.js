const Mock = require('mockjs')
const getRegExpUrl = function (relativeUrl) {
  return RegExp(relativeUrl + '.*')
}

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

Mock.mock(getRegExpUrl('/vue-admin-template/user/login'), 'post', (req) => {
  return {
    msg: '操作成功',
    status: 0,
    data: {
      token: 'weqeqewqeqweqeqafbghmyuqfcfafweeqeq',
      userPermission: '1',
      username: '你好'
    }
  }
})
Mock.mock(getRegExpUrl('/vue-admin-template/user/info'), 'get', (req) => {
  return {
    msg: '操作成功',
    status: 0,
    data: {
      name: 'admin',
      avatar: 'admin'
    }
  }
})
Mock.mock(getRegExpUrl('/vue-admin-template/user/logout'), 'post', (req) => {
  return {
    msg: '操作成功',
    status: 0,
    data: 'success'
  }
})

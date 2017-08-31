// 工具类
export const checkIsLogin = function (token = 'token') {
  return token && token != 'token'
}
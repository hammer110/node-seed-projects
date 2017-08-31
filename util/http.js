// 封装的ajax库
'use strict'
import request from 'request-promise'
import userInfo from '../config/userInfo'
import _ from 'lodash'
// 默认参数
let params = {
  method: 'post',
  url: '',
  headers: {
    deviceType: "h5",
    proId: "h556b7d5c7ds487a8efjx771d2c01eh5",
    token: userInfo.info.token,
    version: '1.1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36'
    
  },
  formData: {}
}
const http = function (options) {
  params.headers.t = new Date().valueOf()
  params.headers.token = userInfo.info.token
  _.merge(params, options)
  return request(params)
}
export default http
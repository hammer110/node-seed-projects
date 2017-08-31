'use strict'
// 用户信息
import request from 'request-promise'
import { customerInfo } from '../../config/api'
import http from '../../util/http'
import userInfo from '../../config/userInfo'

export default class UserInfo {
  constructor () {
    this.queryUserInfo = this.queryUserInfo.bind(this)
  }
  // 查询用户信息接口
  queryUserInfo () {
    return http({
      url: customerInfo,
      formData: {
        source: ''
      }
    })
  }
}
'use strict';

// 首页 controller
import userInfo from '../../config/userInfo'
import rp from 'request-promise'
import api from '../config/api'
import { isLogin } from '../../until/'

class Index {
  constructor () {
    this.init = this.init.bind(this)
  }
  init (req, res, next) {
    // 把url里面的数据合并到userInfo
    Object.assign(userInfo, req.query)
    const token = req.query || 'token'   
    // 判断是否登陆
    const isLogin = isLogin()
    if (isLogin) {
      res.render('index', { title: "name" })
    } else {

    }
  }
  // 查询用户信息接口
  queryUserInfo () {
    return rp({
      url: api.categoryProduct,
      formData: {}
    })
  }
}
export default new Index()
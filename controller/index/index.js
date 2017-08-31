'use strict'
// 首页 controller
import userInfo from '../../config/userInfo'
import { checkIsLogin } from '../../util/'
import UserInfo from '../userInfo/'
class Index extends UserInfo {
  constructor (props) {
    super(props)
    this.init = this.init.bind(this)
  }
  init (req, res, next) {
    // Object.assign(userInfo.info, req.query)
    userInfo.info = req.query
    // 查询用户信息
    this.queryUserInfo()
    .then(res => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
    // 把url里面的数据合并到userInfo
    // Object.assign(userInfo, req.query)
    const token = req.query || 'token'   
    // 判断是否登陆
    const isLogin = checkIsLogin(token)
    if (isLogin) {
      res.render('index', { title: "2121" })
    } else {
      res.render('index', { title: "21212" })
    }
  }
}
export default new Index()
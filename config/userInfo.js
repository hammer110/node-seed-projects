// 用户信息model
import _ from 'lodash'

let info = {
  token: 'token',
  source: ''
}
class UserInfo {
  constructor (option = {}) {
    const { info } = option
  }
  get info() {
    return info
  }
  set info (obj) {
    _.assign(info, obj)
  }
}
export default new UserInfo()
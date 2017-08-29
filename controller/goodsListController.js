'use strict';
var querystring = require("querystring");
var rp = require('request-promise');
var api = require('../config/api');

class GoodsList {
  constructor () {
    this.queryGoodsList = this.queryGoodsList.bind(this)
    this.params = {
      url: api.categoryProduct,
      method: 'post',
      formData: {
        ver: "5.5.5",
        Plat: "IOS",
        CategoryType: "kqkwshoq20160830220639793",
        upCategoryType: "iwrfmnew20160830221841955",
        productName: "",
        pageNo: 1,
        orderNo: 0,
        uid: 450991,
        token: "",
        deAc: 1
      }
    }
  }
  // 查询商品列表
  queryGoodsList (req, res, next) {
    if (req.body['pageNo']) {
      Object.assign(this.params.formData, req.body)
    }
    return rp(this.params)
  }
}
export default new GoodsList()
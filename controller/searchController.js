'use strict';
var rp = require('request-promise');
var api = require('../config/api');

class Search {
  constructor () {
    this.params = {
      url: api.productsearch,
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
    this.query = this.query.bind(this)
  }
  query (req, res, next) {
    Object.assign(this.params.formData, req.body)
    return rp(this.params)
  }
}
export default new Search()
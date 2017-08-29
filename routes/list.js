var express = require('express');
var router = express.Router();
var querystring = require("querystring");
var rp = require('request-promise');
var api = require('../config/api');
import goodsListController from '../controller/goodsListController'

router.get('/', function (req, res, next) {
  goodsListController.queryGoodsList(req, res, next)
  .then((response) => {
    let responseCopy = JSON.parse(response)
    if (responseCopy.status == '1') {
      res.render('list', { goodsList: responseCopy.data });
    } else {
      res.render('list', { msg: '请求接口失败，请重新尝试' })
    } 
  })
})

module.exports = router;
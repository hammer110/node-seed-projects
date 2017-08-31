
var express = require('express');
var querystring = require("querystring");
var rp = require('request-promise');
var api = require('../config/api')
var router = express.Router();
var post_options = {
  url: api.indexHome,
  method: 'post',
  formData: {
    ver: "5.5.5",
    Plat: "IOS",
    floor: '2'
  }
};
router.post('/', function(req, res, next) {
  var body = {
    indexHome: {}
  }
  rp(post_options).then(response => {
    body.indexHome = JSON.parse(response)
  }).then(() => {
    return rp(post_options).then(response => {
      body.actives = JSON.parse(response)
    })
  }).then(() => {
    res.json(200, body)
  })
});

module.exports = router;

import express from 'express'
import goodsListController from '../../controller/goodsListController'
const router = express.Router();

router.post('/', function (req, res, next) {
  goodsListController.queryGoodsList(req, res, next)
  .then((response) => {
    let responseCopy = JSON.parse(response)
    if (responseCopy.status == '1') {
      res.json(200, { goodsList: responseCopy.data });
    } else {
      res.json(500, { msg: '请求接口失败，请重新尝试' })
    } 
  })
})

module.exports = router;
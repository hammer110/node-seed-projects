import express from 'express'
import searchController from '../../controller/searchController'
const router = express.Router();

router.post('/', function (req, res, next) {
  if (req.body.productName === '') {
    res.json(200, {
      msg: '参数输入错误，请重新尝试'
    });
    return 
  }
  searchController.query(req, res, next)
  .then((response) => {
    let responseCopy = JSON.parse(response)
    res.json(200, responseCopy);
  })
})

module.exports = router;
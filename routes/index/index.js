'use strict';
// 首页
import express from 'express'
var router = express.Router();
import index from '../../controller/index/'

router.get('/', index.init)

export default router
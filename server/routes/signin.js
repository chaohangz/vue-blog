const express = require('express')
const router = express.Router()

const checkNotlogin = require('../middlewares/check').checkNotLogin

// GET /signin 登录页
router.get('/', checkNotlogin, (req, res, next) => {
  res.render('signin')
})

// POST /signin 用户登录
router.get('/', checkNotlogin, (req, res, next) => {
  res.send(req.flash())
})

module.exports = router
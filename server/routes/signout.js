const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出页
router.get('/', checkLogin, (req, res, next) => {
  // 清空 session 中的用户信息
  req.session.user = null
  req.flash('success', '登录成功')
  res.redirect('/posts')
})

module.exports = router
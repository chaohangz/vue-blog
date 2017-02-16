const sha1 = require('sha1')
const express = require('express')
const router = express.Router()

const UserModel = require('../models/users.js')
const checkNotlogin = require('../middlewares/check').checkNotLogin

// GET /signin 登录页
router.get('/', checkNotlogin, (req, res, next) => {
  res.render('signin')
})

// POST /signin 用户登录
router.get('/', checkNotlogin, (req, res, next) => {
  let name = req.fields.name
  let password = req.fields.password

  UserModel.getUserByName(name)
    .then((user) => {
      if (!user) {
        req.flash('error', '用户不存在')
        return res.redirect('back')
      }
      if (sha1(password) !== user.password) {
        req.flash('error', '密码错误')
        return res.redirect('back')
      }
      req.flash('success', '登录成功')
      // 用户信息写入session
      delete user.password
      req.session.user = user
      res.redirect('/posts')
    })
    .catch(next)
})

module.exports = router
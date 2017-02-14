import express from "express"
const router= express.Router()

const checkLogin = require('../models/check').checkLogin()

//GET /posts 所有用户或者特定用户的w文章页
router.get('/', (req, res, next) => {
  res.send(req.flash())
})

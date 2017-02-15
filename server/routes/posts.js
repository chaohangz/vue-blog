const express = require('express')
const router= express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /posts 所有用户或者特定用户的文章页
router.get('/', (req, res, next) => {
  res.render('posts')
})


// GET /posts/:postsId 查看一篇文章
router.get('/posts/:postsId', (req, res, next) => {
  res.send(req.flash())
})

// GET /posts/create 创建一篇文章
router.get('/posts/create', (req, res, next) => {
  res.send(req.flash())
})

// POST /posts 发表文章
router.post('/posts', (req, res, next) => {
  res.send(req.flash())
})

// GET /posts/:postsId/edit 修改文章页
router.get('/posts/:postsId/edit', (req, res, next) => {
  res.send(req.flash())
})

// POST /posts/:postsId/edit 更新一篇文章
router.post('/posts/:postsId/edit', (req, res, next) => {
  res.send(req.flash())
})

// DELETE /posts/:postId
router.delete('/posts/:postiD', (req, res, next) => {
  res.send(req.flash())
})

// POST /posts/:postId/comment
router.post('/posts/:postId/comment', (req, res, next) => {
  res.send(req.flash())
})

// DELETE /posts/:postId/comment/:commentId
router.delete('/posts/:postsId/comment:commentId', (req, res, next) => {
  res.send(req.flash())
})

module.exports = router
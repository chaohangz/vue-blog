const express = require('express')
const router= express.Router()

const checkLogin = require('../middlewares/check').checkLogin

const PostModel = require('../models/posts')

// GET /posts 所有用户或者特定用户的文章页
router.get('/', (req, res, next) => {
  // 从url中查询用户名
  let author = req.query.author

  // 疑问4 如何区分主页和用户页
  PostModel.getPosts(author)
    .then((posts) => {
      res.render('posts', {
        posts: posts
      })
    })
    .catch(next)
})

// GET /posts/create 创建一篇文章
router.get('/posts/create', (req, res, next) => {
  res.render('create')
})

// POST /posts 发表文章
router.post('/', checkLogin, (req, res, next) => {
  // 用户id直接从session上获取
  let author = req.session.user._id
  let title = req.fields.title
  let content = req.fields.content

  // 校验参数
  try {
    if (!title.length) {
      throw new Error('请输入标题')
    }
    if (!content.length) {
      throw new Error('请输入内容')
    }
  } catch(e) {
    req.flash('error', e.message)
    return res.redirect('back')
  }

  // 等待放入数据库的post数据
  let post= {
    author: author,
    title: title,
    content: content,
    pv: 0
  }

  PostModel.create(post)
    .then((result) => {
      // 此post 是插入mongodb后的值，包含 _id
      // _id 是在此处生成的？
      post = result.ops[0]
      req.flash('success', '发表成功')
      res.redirect(`/posts/${post._id}`)
    })
    .catch(next)
})

// GET /posts/:postsId 查看一篇文章
router.get('/:postsId', (req, res, next) => {
  let postId = req.params.postId

  Promise.all([
    PostModel.getPostById(postId),  // 获取所有信息
    PostModel.incPv(postId)
  ])
    .then((result) => {
      let post = result[0]
      if (!post) {
        throw new Error('该文章不存在')
      }

      res.render('post', {
        post: post
      })
    })
    .catch(next)
})

// GET /posts/:postsId/edit 修改文章页
router.get('/:postsId/edit', (req, res, next) => {
  let postId = req.params.postId
  let author = req.session.user._id

  PostModel.getRawPostById(postId)
    .then((post) => {
      if (!post) {
        throw new Error('该文章不存在')
      }
      if (author.toString() !== post.author._id.toString()) {
        throw new Error('权限不足')
      }
      res.render('edit', {
        post: post
      })
    })
    .catch(next)
})

// POST /posts/:postsId/edit 更新一篇文章
router.post('/posts/:postsId/edit', (req, res, next) => {
  let postId = req.params.postId
  let author = req.session.user._id
  let title = req.fields.title
  let content = req.fields.content

  PostModel.updatePostById(postId, author, {title: title, content: content})
    .then(() => {
      req.flash('success', '编辑文章成功')
      res.redirect(`/posts/${postId}`)
    })
    .catch(next)
})

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, (req, res, next) => {
  let postId = req.params.postId
  let author = req.session.user._id

  PostModel.delPostById(postId, author)
    .then(() => {
      req.flash('success', '删除文章成功')
      res.redirect('/posts')
    })
    .catch(next)
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
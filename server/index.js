const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')
const routes = require('./routes')
const pkg = require('./package')

const app = express()

// 设置模板目录
app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎为ejs
app.set('view engine', 'ejs')

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))
// session 中间件
app.use(session({
  name: config.session.key, // 设置cookie中保存session id的字段
  secret: config.session.secret, // 通过设置secret来计算hash值并放在cookie中，使产生的signedCookie防篡改
  cookie: {
    maxAge: config.session.maxAge  // 过期时间，过期后cookie中的session id自动删除
  },
  store: new MongoStore({
    url: config.mongodb   //将session储存到mongodb地址
  })
}))

// flash中间件，用来显示消息
app.use(flash())

// 设置模板全局常量
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}

// 设置模板全局变量
app.use((req, res, next) => {
  res.locals.user = req.session.user
  res.locals.success = req.flash('success').toString()
  res.locals.error = req.flash('error').toString()
  next()
})

// 处理表单及文件上传的中间件
app.use(require('express-formidable')({
  uploadDir: path.join(__dirname, 'public/img'),  // 文件上传目录
  keepExtensions: true  // 保留后缀
}))

// 路由
routes(app)

app.listen(config.port, () => {
  console.log(`${pkg.name} listening on port ${config.port}`)
})
import path from "path"
import express from "express"
import session from "express-session"
import flash from "flash"
import config from "config-lite"
import routes from "./routes"
import pkg from "./package"

const MongoStore = require('connect-mongo')(session)

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

// 路由
routes(app)

app.listen(config.port, () => {console.log(`${pkg.name} listening on port ${config.port}`)})
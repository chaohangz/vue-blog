module.exports = {
  port: 3000,
  session: {
    secret: 'blog',
    key: 'blog',
    maxAge: 25920000000
  },
  mongodb: 'mongodb://localhost:27017/blog'
}
// const express = require('express')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const userRouter = require('./user')
// const app = express()
//
// app.use(cookieParser())
// app.use(bodyParser.json())
// app.use('/user', userRouter)
// app.listen(9093, function () {
//   console.log('Node app start at port 9093')
// })




const express = require('express')
const mongoose = require('mongoose')

// 连接 mongo, use imooc set
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  // if connect success
  console.log('mongo connect server')
})

// 定义文档模型
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: String, require: true}
}))

// 新增数据
User.create({
  name: 'xiaoming',
  age: 18
}, function (err, doc) {
  if (!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
})
// remove data
// User.remove({age: 18}, function (err, doc) {
//   console.log(doc)
// })
//
User.update({'name': 'xiaoming'}, {'$set': {age: 30}}, function (err, doc) {
  console.log(doc)
})

// create app
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
  User.find({}, function (err, doc) {
    res.json(doc)
  })
})
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})

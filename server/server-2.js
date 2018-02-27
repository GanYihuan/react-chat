const express = require('express')
const mongoose = require('mongoose')
// connect mongo, use imooc set
// iTerm, mongo
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  // if connect success
  console.log('mongo connect server')
})

// Defining a document Model
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: String, require: true}
}))

// New data
User.create({
  name: 'xiaohua',
  age: 14
}, function (err, doc) {
  if (!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
})

// 删除数据
// User.remove({age: 18}, function (err, doc) {
//   console.log(doc)
// })

// 更新数据
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

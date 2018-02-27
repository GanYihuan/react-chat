const express = require('express')
const mongoose = require('mongoose')
// 1) connect mongo, use imooc set
// iTerm, mongo
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  // if connect success
  console.log('mongo connect server')
})

// 2) Defining a document Model
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))

// 3) New data
// User.create({
//   user: "xiaohua",
//   age: 14
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// 4) Delete data
// User.remove({age: 14}, function (err, doc) {
//   console.log(doc)
// })

// 5) Update and set data
User.update({'user': 'xiaohua'}, {'$set': {age: 30}}, function (err, doc) {
  console.log(doc)
})

// create app
const app = express()
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
  // 6) find data
  User.find({}, function (err, doc) {
    res.json(doc)
  })
  // User.find({{user:'xiaohua'}}, function (err, doc) {
  //   res.json(doc)
  // })
  // User.findOne({{user:'xiaohua'}}, function (err, doc) {
  //   res.json(doc)
  // })
})
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
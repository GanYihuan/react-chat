const express = require('../../../Library/Caches/typescript/2.9/node_modules/@types/express')
const mongoose = require('mongoose')

// 连接 mongo, (copy from iTerm mongo)
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect server')
})

// 定义文档模型
const User = mongoose.model('user', new mongoose.Schema(
  {
    user: {
      type: String,
      require: true
    },
    age: {
      type: String,
      require: true
    }
  }
))

// 增加数据
User.create(
  {
    name: 'xiaohua',
    age: 14
  },
  function (err, doc) {
    if (!err) {
      console.log(doc)
    } else {
      console.log(err)
    }
  }
)

// 删除数据
// User.remove({age: 18}, function (err, doc) {
//   console.log(doc)
// })

// 修改数据
User.update(
  {
    'name': 'xiaoming'
  },
  {
    '$set': {
      age: 30
    }
  },
  function (err, doc) {
    console.log(doc)
  }
)

const app = express()
// res.send() 返回文本
// res.json() 返回 json
// res.sendfile() 返回文件
// [访问数据](http://localhost:9093)
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
  // 查询数据
  User.find({}, function (err, doc) {
    res.json(doc)
  })
})
// 监听端口
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})

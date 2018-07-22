const express = require('express')
const app = express()

// res.send() 返回文本
// res.json() 返回json
// res.sendfile() 返回文件
// 使用模块
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

// http://localhost:9093/data
app.get('/data', function (req, res) {
  res.json({
    name: 'imooc',
    type: 'IT'
  })
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
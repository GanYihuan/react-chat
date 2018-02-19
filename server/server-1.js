const express = require('express')
const app = express()

app.use('/user', function (req, res) {
  res.send('<h1>hello world</h1>')
})
app.get('/data', function (req, res) {
  res.json({name: 'imooc', type: 'IT'})
})
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
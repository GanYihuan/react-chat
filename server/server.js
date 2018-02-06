// iterm2:
// cd server
// node server.js
// chrome:
// chrome open localhost:9093
const express = require('express');
const mongoose = require('mongoose');
// connect mongo, use imooc Collection
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('connected success mongo!')
});
// simular mysql table


const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello word</h1>');
})
app.get('/data', function (req, res) {
  res.json({name: 'imooc React', type: 'IT'});
})
app.listen(9093, function () {
  console.log('app start at 9093');
})
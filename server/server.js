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
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: String, require: true}
}));
// create data
User.create({
  user: 'xiaohua',
  age: 14
}, function (err, doc) {
  if (!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
});
// update data
User.update({'user': 'xiaohua'}, {'$set': {age: 24}}, function (err, doc) {
  console.log(doc)
})
// delete data
User.remove({age: 12}, function (res, doc) {
  console.log(doc)
})

const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello word</h1>');
})
app.get('/data', function (req, res) {
  // find only one data!
  User.findOne({user: 'xiaohua'}, function (err, doc) {
    res.json(doc)
  })
  // find data!
  // User.find({user: 'xiaohua'}, function (err, doc) {
  //   res.json(doc)
  // })
  // res.json({name: 'imooc React', type: 'IT'});
})
app.listen(9093, function () {
  console.log('app start at 9093');
})
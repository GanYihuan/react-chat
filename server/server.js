const express = require('express')
const mongoose = require('mongoose')

// connect mongo, use imooc collection
// copy from iTerm mongo
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
	console.log('mongo connect server')
})

// Defining the document model
const User = mongoose.model(
	'user',
	new mongoose.Schema({
		user: {
			type: String,
			require: true
		},
		age: {
			type: String,
			require: true
		}
	})
)

// Increase data
User.create(
	{
		name: 'xiaohua',
		age: 14
	},
	function(err, doc) {
		if (!err) {
			console.log(doc)
		} else {
			console.log(err)
		}
	}
)

// delete data
// User.remove({age: 18}, function (err, doc) {
//   console.log(doc)
// })

// change the data
User.update(
	{
		name: 'xiaoming'
	},
	{
		$set: { age: 30 }
	},
	function(err, doc) {
		console.log(doc)
	}
)

const app = express()
// res.send() // return text
// res.json() // return json
// res.sendfile() // return file
// Access data
// http://localhost:9093
app.get('/', function(req, res) {
	res.send('<h1>hello world</h1>')
})
app.get('/data', function(req, res) {
	// Query data
	User.find({}, function(err, doc) {
		res.json(doc)
	})
})
// Listening port
app.listen(9093, function() {
	console.log('Node app start at port 9093')
})

var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
	var jsonObj = {
		method : 'GET'
	};
	res.json(jsonObj);
});

app.post('/', function(req, res) {
	var jsonObj = {
		method : 'POST'
	};
	res.json(jsonObj);
});

app.put('/', function(req, res) {
	var jsonObj = {
		method : 'PUT'
	};
	res.json(jsonObj);
});

app.delete('/', function(req, res) {
	var jsonObj = {
		method : 'DELETE'
	};
	res.json(jsonObj);
});

server.listen(8080, '127.0.0.1', function() {
	console.log('Http Server Listening on Port: 8080 ... ');
});
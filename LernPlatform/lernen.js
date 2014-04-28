var express = require('express');
var http = require('http');
var mongodb = require('mongoskin');

var lernen = express();
var server = http.createServer(lernen);
var db = mongodb.db('mongodb://localhost/lernplattform?auto_reconnect=true', {safe: true});

db.bind('kommentarcollection');
var collection = db.kommentarcollection;

lernen.configure(function(){
	lernen.use(express.static(__dirname + '/public'));
	lernen.use(express.json());
	lernen.use(express.urlencoded());

	lernen.use(function(err, req, res, next){
		console.error(err.stack);
		res.end(err.status + ' ' + err.messages);
	});
});

lernen.get('/kommentar', function(req, res, next){
	collection.findItems(function(err, kommentar){
		if(err){
			next(err);
		}
		else {
			res.writeHead(200, {'Content-Type':'application/json'});
			res.end(JSON.stringify(kommentar));
		}
	});
});

lernen.post('/addkommentar', function(req, res, next){
	collection.insert(req.body, function(err, kommentar){
		if(err){
			next(err);
		}
		else{
			res.writeHead(200, 'OK');
			res.write('Daten wurden gespeichert.');
			res.end();
		}
	});
});

server.listen(3000, function(){
	console.log('Server listens on port 3000.');
});
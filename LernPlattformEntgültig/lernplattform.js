//Module einbinden
var express = require('express');
var faye = require('faye');
var path = require('path');
var http = require('http');

//routes (js) einbinden
var cgamaterial1 = require('./routes/cgamaterial1');
var wba2material1 = require('./routes/wba2material1'); 
var routes = require('./routes');

//Datenbank einbinden
var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/lernplattform', {native_parser:true});

//server erstellen
var app = express();
var server = http.createServer(app);

//Nodeadapter bayeux
var bayeux = new faye.NodeAdapter({
	mount: '/faye',
	timeout: 45
});

//bayeux an server anbinden
bayeux.attach(server);

//PubSubClient erstellen
var PubSubClient = bayeux.getClient();

//app konfigurieren(umgebung, middleware)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded());
//benutzt um callbacks zu unterdrücken
app.use(app.router); 
app.use(express.static(path.join(__dirname, 'public')));

//development sendet 500 wenn etwas falsch läuft
if('development' == app.get('env')) {
	app.use(express.errorHandler());
};

// home etc
app.get('/', routes.login);
app.get('/home', routes.home);
app.get('/home/wba2', routes.wba2);
app.get('/home/cga', routes.cga);
app.get('/home/wba2/material1', wba2material1.ladekommentare(db));
app.post('/wba2/material1/addkommentar', wba2material1.addkommentare(db, PubSubClient));

app.get('/home/cga/material1', cgamaterial1.ladekommentare(db));
app.post('/cga/material1/addkommentar', cgamaterial1.addkommentare(db, PubSubClient));

app.use(function(req, res, next){
	res.status(404);

	//res mit html seite
	if(req.accepts('html')) {
		res.render('404', {url: req.url});
		return;
	};

	//res mit json
	if(req.accepts('json')) {
		res.send({error: 'JSON nicht gefunden!'});
		return;
	};

	//standard der normalen text. send()
	res.type('txt').send('txt nicht gefunden!');
});

//server port+console login
server.listen(app.get('port'), function(){
	console.log('Server listening on port' + app.get('port'));
});

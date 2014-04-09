var express = require('express');
var mongo = require('mongoskin');
var http = require('http');
var faye = require('faye');

//Express und http-Server erstellen
var app = express();
var server = http.createServer(app);

/* Verbindung zur Datenbank herstellen
* auto_reconnect=true: 
* Bei Verbinsungsabbrüchen zur DB wird die Verbindung automatisch wieder hergestellt
* safe = true: Ist später wichtig, damit in Callbacks bei DB-Zugriffen
* die Parameter "err" und "result" in Callbacks gefuellt werden.
*/
var db = mongo.db('mongodb://localhost/wba2?auto_reconnect=true', {safe:true});

//Collection "Planeten" binden
db.bind("wba2");

// Anschließend kann auf die Collection über das db-Objekt zugegriffen werden
var wba2Collection = db.wba2;

//Nodeadapter auf faye konfigurieren
var bayeux = new faye.NodeAdapter({
	mount: '/faye',
	timeout: 45
});

//Verbindung des neu-konfigurierten adapters mit dem server
bayeux.attach(server);

//PubSub-Client wird erzeugt
var PubSubClient = bayeux.getClient();

app.configure(function( ){
	//Verzeichnis für den direkten Zugriff von außen freigeben
	app.use(express.static(__dirname + '/public'));

	//benötigt um Informationen des Requests zu parsen
	app.use(express.json());
	app.use(express.urlencoded());

});

//möglicher Errorhandler
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.end(err.status + '' + err.messages);
});

app.get('/wba2', function(req, res, next){

	//Daten können/werden aus der Datenbank abgerufen
	wba2Collection.findItems(function(err, result) {
		//Fehlerbehandlung
		if(err) {
			next(err);
		}
		//JSON-File an Client uebertragen
		else {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(result));
		}
	});
});

app.post('/wba2', function(req, res, next){

	//Daten an die Datenbank uebergeben
   wba2Collection.insert(req.body, function(err, result) {

		//Fehlerbehandlung
		if(err) {
			//next(err);
		}

		//JSON-File an Client uebertragen
		else {
			//resp.writeHead(200, 'OK');
			//resp.write('Daten wurden gespeichert.');
			//resp.end();
		}
	});
    
    //Neuer Post ( publishen der Daten )
	PubSubClient.publish('/wba2', {
		'Kommentar': req.body.Kommentar
	}).then(function() { 
		//wenn der Publish funktioniert
		res.writeHead(200, 'OK');
		res.write('Daten wurden gesendet.');
		res.end();
	}, function(error) { 
		//wenn der Publish nicht funktioniert
		next(error);
	});
});

server.listen(3000, function() {
	console.log('Server listens on port 3000.');
});
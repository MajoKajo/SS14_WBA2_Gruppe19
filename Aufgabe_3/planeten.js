//benötigte 'requires'
var express = require('express');
var mongo = require('mongoskin');
var http = require('http');
var faye = require('faye');

//das JSON array benötigen wir nicht mehr da wir mit mongodb bzw robomongo etc arbeiten
/*var planeten = [ 
{"Planet":"Merkur", "Durchmesser":"4.878", "Entfernung":"46 - 70 Mio"},
{"Planet":"Venus", "Durchmesser":"12.103,6", "Entfernung":"107,5 - 108,9 Mio"},
{"Planet":"Erde", "Durchmesser":"12.765,28", "Entfernung":"147 - 152 Mio"},
{"Planet":"Mars", "Durchmesser":"6.794,4", "Entfernung":"206,7 - 249,2 Mio"},
{"Planet":"Jupiter", "Durchmesser":"142.984", "Entfernung":"740 - 815 Mio"},
{"Planet":"Saturn", "Durchmesser":"120.536", "Entfernung":"1343 - 1509 Mio"},
{"Planet":"Uranus", "Durchmesser":"51.118", "Entfernung":"2.735 - 3.005 Mio"},
{"Planet":"Neptun", "Durchmesser":"49.532", "Entfernung":"4.456 - 4.537 Mio"}
];*/
<<<<<<< HEAD
<<<<<<< HEAD
var mongoDB = require('mongoskin');
=======

>>>>>>> FETCH_HEAD
=======

>>>>>>> FETCH_HEAD
/* Verbindung zur Datenbank herstellen
* auto_reconnect=true: 
* Bei Verbinsungsabbrüchen zur DB wird die Verbindung automatisch wieder hergestellt
* safe = true: Ist später wichtig, damit in Callbacks bei DB-Zugriffen
* die Parameter "err" und "result" in Callbacks gefuellt werden.
*/
var db = mongo.db('mongodb://localhost/planets?auto_reconnect=true', {safe:true});

//Collection "Planeten" binden
db.bind("planeten");

// Anschließend kann auf die Collection über das db-Objekt zugegriffen werden
var planetenCollection = db.planeten;

//Express und http-Server erstellen
var app = express();
var server = http.createServer(app);

//Nodeadapter auf faye konfigurieren
var bayeux = new faye.NodeAdapter({
	mount: '/faye',
	timeout: 45
});

<<<<<<< HEAD
<<<<<<< HEAD
var planeten = [ 
{"Planet":"Merkur", "Durchmesser":"4.878", "Entfernung":"70"},
{"Planet":"Venus", "Durchmesser":"12.103,6", "Entfernung":"108,9"},
{"Planet":"Erde", "Durchmesser":"12.765,28", "Entfernung":"152"},
{"Planet":"Mars", "Durchmesser":"6.794,4", "Entfernung":"249.2"},
{"Planet":"Jupiter", "Durchmesser":"142.984", "Entfernung":"815"},
{"Planet":"Saturn", "Durchmesser":"120.536", "Entfernung":"1509"},
{"Planet":"Uranus", "Durchmesser":"51.118", "Entfernung":"3.005"},
{"Planet":"Neptun", "Durchmesser":"49.532", "Entfernung":"4.537"}
];
=======
//Verbindung des neu-konfigurierten adapters mit dem server
bayeux.attach(server);
>>>>>>> FETCH_HEAD
=======
//Verbindung des neu-konfigurierten adapters mit dem server
bayeux.attach(server);
>>>>>>> FETCH_HEAD

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

<<<<<<< HEAD
<<<<<<< HEAD
//Verbindung des neu-konfigurierten adapters mit dem server
bayeux.attach(server);

//Datenbank implementieren (den zugriff auf jene erstellen)
var db = mongo.db('mongodb://localhost/planets?auto_reconnect=true', {safe:true});
db.bind('planeten');

var sammlung = db.planeten;

//PubSub-Client wird erzeugt
var PubSubClient = bayeux.getClient();
=======
>>>>>>> FETCH_HEAD
=======
>>>>>>> FETCH_HEAD
 
app.get('/planeten', function(req, res, next){

	//Daten können/werden aus der Datenbank abgerufen
	planetenCollection.findItems(function(err, result) {
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
<<<<<<< HEAD
<<<<<<< HEAD

	//nicht mehr benötigt
	/*res.writeHead(200, "OK", {'Content-Type': 'text/html'});
 
	res.write("<table border=1>");
	res.write("<tr><th>Planeten</th><th>Durchmesser in km</th><th>Entfernung Sonne in km</th></tr>");
	
	planeten.forEach(function(planet){
		res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
	});
=======
app.get('/planeten', function(req, res, next){

	planetenCollection.findItems(function(err, result){
		if(err){
			next(err);
		} else {
			response.writeHead(200, {
				'Content-Type': 'application/json'
			});
			
		
	

			/*res.writeHead(200, "OK", {'Content-Type': 'text/html'});
 
			res.write("<table border=1>");
			res.write("<tr><th>Planeten</th><th>Durchmesser in km</th><th>Entfernung Sonne in Mio km</th></tr>");
			planeten.forEach(function(planet){
				res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
			});
		
			res.write("</table>");
    		res.write("<a href='/'>Zurueck</a>"); //Zurück zur Formulardatei*/

	res.end();*/
=======
>>>>>>> FETCH_HEAD
=======
>>>>>>> FETCH_HEAD
});

app.post('/planeten', function(req, res, next){

	//Daten an die Datenbank uebergeben
   planetenCollection.insert(req.body, function(err, result) {

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
	PubSubClient.publish('/planeten', {
		'Planet': req.body.Planet,
		'Durchmesser': req.body.Durchmesser,
		'Entfernung': req.body.Entfernung
	}).then(function() { 
		//wenn der Publish funktioniert
		res.writeHead(200, 'OK');
		res.write('Daten wurden gesendet.');
		res.end();
	}, function(error) { 
		//wenn der Publish nicht funktioniert
		next(error);
	});
<<<<<<< HEAD
<<<<<<< HEAD

			res.end(JSON.stringify(result));
		}
	});
});

app.post('/planeten', function(req, res, next){
	/* Dokumente in Collection "planeten" speichern. ZU speicherndes
 	* Dokument wird als Parameter der FUnktion "save" übergeben.
 	*/ 
 	planetenCollection.insert(req.body, function(err, result){
 		if(err){
 			next(err);
 		} else {
 			pubSubClient.publish('/planeten', req.body);

			res.writeHead(200, "OK");
			res.write('Daten wurden gespeichert');
			res.end();
		}
 	});

=======
>>>>>>> FETCH_HEAD
=======
>>>>>>> FETCH_HEAD
});

//'server.listen' anstatt 'app.listen' (faye)
server.listen(3000, function() {
	console.log('Server listens on port 3000.');
<<<<<<< HEAD
});
=======
});
>>>>>>> FETCH_HEAD

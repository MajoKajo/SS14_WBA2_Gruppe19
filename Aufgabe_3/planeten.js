var express = require('express');
var mongoDB = require('mongoskin');
/* Verbindung zur Datenbank herstellen
* auto_reconnect=true: 
* Bei Verbinsungsabbrüchen zur DB wird die Verbindung automatisch wieder hergestellt
* safe = true: Ist später wichtig, damit in Callbacks bei DB-Zugriffen
* die Parameter "err" und "result" in Callbacks gefuellt werden.
*/
var db = mongoDB.db('mongodb://localhost/mydb?auto_reconnect=true', {
	safe: true
});

//Collection "Planeten" binden
db.bind("planeten");

// Anschließend kann auf die Collection über das db-Objekt zugegriffen werden
var planetenCollection = db.planeten;

planetenCollection.insert({
	planet: "Max Mustermann",
	eintrag: "bla"

}, function(err, planeten) {

});

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

var app = express(); 

app.configure(function( ){
	//Verzeichnis für den direkten Zugriff von außen freigeben
	app.use(express.static(__dirname + '/public'));

	//benötigt um Informationen des Requests zu parsen
	app.use(express.json());
	app.use(express.urlencoded());

	//möglicher Errorhandler
	app.use(function(err, req, res, next){
		console.error(err.stack);
		res.end(err.status + '' + err.messages);
	});
});


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
});
	

app.listen(3000);

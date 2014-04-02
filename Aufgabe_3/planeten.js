var express = require('express');
var mongoDB = require

var planeten = [ 
{"Planet":"Merkur", "Durchmesser":"4.878", "Entfernung":"46 - 70 Mio"},
{"Planet":"Venus", "Durchmesser":"12.103,6", "Entfernung":"107,5 - 108,9 Mio"},
{"Planet":"Erde", "Durchmesser":"12.765,28", "Entfernung":"147 - 152 Mio"},
{"Planet":"Mars", "Durchmesser":"6.794,4", "Entfernung":"206,7 - 249,2 Mio"},
{"Planet":"Jupiter", "Durchmesser":"142.984", "Entfernung":"740 - 815 Mio"},
{"Planet":"Saturn", "Durchmesser":"120.536", "Entfernung":"1343 - 1509 Mio"},
{"Planet":"Uranus", "Durchmesser":"51.118", "Entfernung":"2.735 - 3.005 Mio"},
{"Planet":"Neptun", "Durchmesser":"49.532", "Entfernung":"4.456 - 4.537 Mio"}
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


app.get('/planeten', function(req, res){

	res.writeHead(200, "OK", {'Content-Type': 'text/html'});
 
	res.write("<table border=1>");
	res.write("<tr><th>Planeten</th><th>Durchmesser in km</th><th>Entfernung Sonne in km</th></tr>");
	planeten.forEach(function(planet){
		res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
	});
		
	res.write("</table>");
    res.write("<a href='/'>Zurueck</a>"); //Zurück zur Formulardatei

	res.end();
});

app.post('/planeten', function(req, res){
	res.writeHead(200, "OK");
	planeten.push(req.body);
	res.end();
});
	

app.listen(3000);

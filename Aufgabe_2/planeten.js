var express = require('express');

var planeten = [ 
{"Planet":"Merkur", "Durchmesser":"4.878 km", "Entfernung_Sonne":"46 - 70 Mio km"},
{"Planet":"Venus", "Durchmesser":"12.103,6 km", "Entfernung_Sonne":"107,5 - 108,9 Mio km"},
{"Planet":"Erde", "Durchmesser":"12.765,28 km", "Entfernung_Sonne":"147 - 152 Mio km"},
{"Planet":"Mars", "Durchmesser":"6.794,4 km", "Entfernung_Sonne":"206,7 - 249,2 Mio km"},
{"Planet":"Jupiter", "Durchmesser":"142.984 km", "Entfernung_Sonne":"740 - 815 Mio km"},
{"Planet":"Saturn", "Durchmesser":"120.536 km", "Entfernung_Sonne":"1343 - 1509 Mio km"},
{"Planet":"Uranus", "Durchmesser":"51.118 km", "Entfernung_Sonne":"2.735 - 3.005 Mio km"},
{"Planet":"Neptun", "Durchmesser":"49.532 km", "Entfernung_Sonne":"4.456 - 4.537 Mio km"}
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
	res.write("<tr><th>Planeten</th><th>Durchmesser</th><th>Entfernung Sonne</th></tr>");
	planeten.forEach(function(planet){
		res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung_Sonne+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
	});
		
	res.write("</table>");

	res.end();
});

app.post('/planeten', function(req, res){
	res.writeHead(200, "OK");
	planeten.push(req.body);
	res.end();
});
	

app.listen(3000);

var express = require('express');
var url = require('url');
var	querystring	= require('querystring');

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
	app.use(express.static(__dirname + '/planeten'));

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

	
	var	pfad = url.parse(req.url).pathname;
	console.log('Pfad: '+pfad);
		
	if(pfad != "/planeten"){
	res.writeHead(504, "OK", {'Content-Type': 'text/html'});
	res.write("504 Fehlercode... Sry!")
	res.end();
	};

	res.writeHead(200, "OK", {'Content-Type': 'text/html'});
 	
 	res.write('<script src=„http://code.jquery.com/jquery-1.11.0.min.js“></script>');
	res.write("<table border=1>");
	res.write("<tr><th>Planeten</th><th>Durchmesser</th><th>Entfernung Sonne</th></tr>");
	planeten.forEach(function(planet){
		res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung_Sonne+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
	});
		
	res.write("</table>");

	res.write('<form action="/planeten" method="post">');
	res.write('Planet: <input type="text" name="Planet"><br>');
	res.write('Durchmesser: <input type="text" name="Durchmesser"><br>');
	res.write('Entfernung_Sonne: <input type="text" name="Entfernung_Sonne"><br>'); 
	res.write('<input type="submit" value="Los!">');
	res.write('</form>');

	res.end();
});

app.post('/planeten', function(req, res){
	
var body = '';

	req.on('data',	function(data){	
			body += data.toString();	
	});	

		
	req.on('end', function(){
	//body daten in json objekt
	var daten  = querystring.parse(body);

	if(typeof daten.Planet == 'string'){
		planeten.push(daten);
	};

	});

	$.ajax({
		type: 'POST',
		url: '/planeten',
		data: JSON.stringify('data')
		contentType: 'application/json'
		}).done(function(){
		alert(data.Planet+ ' wurde hinzugefügt.');
		}).fail(function(e){
		alert(data.Planet+ ' konnte nicht hinzugefügt werden. ('+JSON.stringify(e)+')');
	}); 
});
	

app.listen(3000);
/*var server = http.createServer();
var url = require('url');
var	querystring	= require('querystring');


server.on('request', function(req, res){

	console.log('HTTP-Request gestartet')
	console.log('HTTP-Methode: '+req.method);

		var body = '';

		req.on('data',	function(data){	
			body += data.toString();	
		});	

		
		req.on('end', function(){
		//body daten in json objekt
		var daten  = querystring.parse(body);

		if(typeof daten.Planet == 'string'){
			planeten.push(daten);
		};

		
		var	pfad = url.parse(req.url).pathname;
		console.log('Pfad: '+pfad);
		
		if(pfad != "/planeten"){
			res.writeHead(504, "OK", {'Content-Type': 'text/html'});
			res.write("504 Fehlercode... Sry!")
			res.end();
		};
		
		res.writeHead(200, "OK", {'Content-Type': 'text/html'});
 
		res.write("<table border=1>");
		res.write("<tr><th>Planeten</th><th>Durchmesser</th><th>Entfernung Sonne</th></tr>");
		planeten.forEach(function(planet){
			res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung_Sonne+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
		});
		res.write("</table>");

		res.write('<form action="/planeten" method="post">');
		res.write('Planet: <input type="text" name="Planet"><br>');
		res.write('Durchmesser: <input type="text" name="Durchmesser"><br>');
		res.write('Entfernung_Sonne: <input type="text" name="Entfernung_Sonne"><br>'); 
		res.write('<input type="submit" value="Los!">');
		res.write('</form>');

		res.end();
	});
		
});


server.listen(3000);
*/
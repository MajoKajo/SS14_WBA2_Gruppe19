var http = require('http');
var server = http.createServer();
var mongo = require('mongoskin');

var url = require('url');
var querystring = require('querystring');
//json array erstellen
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

/* Verbindung zur Datenbank herstellen
* auto_reconnect=true: 
* Bei Verbinsungsabbrüchen zur DB wird die Verbindung automatisch wieder hergestellt
* safe = true: Ist später wichtig, damit in Callbacks bei DB-Zugriffen
* die Parameter "err" und "result" in Callbacks gefuellt werden.
*/
var db = mongo.db('mongodb://localhost/planeten?auto_reconnect=true', {safe:true});

//Collection "Planeten" binden
db.bind("planeten");

// Anschließend kann auf die Collection über das db-Objekt zugegriffen werden
var planetenCollection = db.planeten;

server.on('request', function(req, res){
//startanzeige in der konsole
console.log('HTTP-Request gestartet')
console.log('HTTP-Methode: '+req.method);

var body = '';
//zwischenspeichern im body   
req.on('data', function(data){ 
body += data.toString(); 
});

req.on('end', function(){
//body daten in json objekt durch übergabe in daten dann push
    var daten = querystring.parse(body);
//damit keine leere zeile erstellt wird    
    if(typeof daten.Planet == 'string'){
    planeten.push(daten);
    };
//in pfad wird eingabe gespeichert(zur späteren überprüfung)
    var pfad = url.parse(req.url).pathname;

    console.log('Pfad: '+pfad);
//fehlerausgabe bei falscher eingabe des pfades
    if(pfad != "/Planeten"){
        res.writeHead(504, "OK", {'Content-Type': 'text/html'});
        res.write("504 Fehlercode... Sry!")
        res.end();
    };

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

//erstellen der tabelle
//erst kopf
    res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    res.write("<table border=1>");
    res.write("<tr><th>Planeten</th><th>Durchmesser</th><th>Entfernung Sonne</th></tr>");
//mit foreach schleife der tbody
    planeten.forEach(function(planet){
        res.write("<tr><td>" +planet.Planet+ "</td><td>" +planet.Entfernung_Sonne+ "</td><td>" +planet.Durchmesser+ "</td></tr>");
    });
//erstellen der eingabefelder und button
    res.write("</table>");
    res.write('<form action="/Planeten" method="post">');
    res.write('Planet: <input type="text" name="Planet"><br>');
    res.write('Durchmesser: <input type="text" name="Durchmesser"><br>');
    res.write('Entfernung_Sonne: <input type="text" name="Entfernung_Sonne"><br>'); 
    res.write('<input type="submit" value="Los!">');
    res.write('</form>');
    res.end();
});

});

server.listen(8888);
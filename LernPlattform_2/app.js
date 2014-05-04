var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var debug = require('debug')('my-application');
var http = require('http');
var faye = require('faye');

// New Code
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/prototyp');

var routes = require('./routes/index');
var wba2 = require('./routes/wba2');

var app = express();
var server = http.createServer(app);

//Nodeadapter auf faye konfigurieren
var bayeux = new faye.NodeAdapter({
    mount: '/faye',
    timeout: 45
});

//Verbindung des neu-konfigurierten adapters mit dem server
bayeux.attach(server);

//PubSub-Client wird erzeugt
var PubSubClient = bayeux.getClient();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/wba2', wba2);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

server.listen(3000, function(){console.log('Server listens on 3000.')});
module.exports = app;

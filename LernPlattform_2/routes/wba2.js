var express = require('express');
var router = express.Router();

/* GET WBA 2 page. */
router.get('/', function(req, res) {
	res.render('wba2', { title: 'WBA 2' })
});

/* GET Kommentarliste. */
router.get('/material1', function(req, res){
    var db = req.db;
    var collection = db.get('kommentarcollection');
    collection.find({},{},function(e,docs){
        res.render('material1', {
            "material1" : docs
        });
    });
});

/* POST to ADD Kommentar */
router.post('/addkommentar', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var kommentar = req.body.kommentar;

    // Set our collection
    var collection = db.get('kommentarcollection');

    // Submit to the DB
    collection.insert({
        "kommentar" : kommentar
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("material1");
        }
    });
});

module.exports = router;
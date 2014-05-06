//GET auf vorhandene Kommentare(laden in tabelle)
exports.ladekommentare = function(db){
	return function(req, res){
		db.collection('kommentarcollectionwba2').find().toArray(function(err, items){
			res.render('wba2material1', {
				"wba2material1" : items
			});
		});
	};
};

exports.addkommentare = function(db, PubSubClient){
	return function(req, res){
		db.collection('kommentarcollectionwba2').insert({
			"material": req.body.textareaKommentar,
		}, function(err, result){
			if(err){
				res.send("Es gab einen Fehler beim Einfügen in die Datenbank.");
			}
			else{
				PubSubClient.publish('/wba2/material1/addkommentar',{
					"material": "WBA2 Material 1 wurde aktualisiert.",
					"hyperlink": "/home/wba2/material1",
				}).then(function(){
					res.writeHead(200, 'OK');
					res.end;
				}, function(error){
					next(error);
				});
				res.redirect('/home/wba2/material1');
			}
		});
	};
};
//GET auf vorhandene Kommentare(laden in tabelle)
exports.ladekommentare = function(db){
	return function(req, res){
		db.collection('kommentarcollectioncga').find().toArray(function(err, items){
			res.render('cgamaterial1', {
				"cgamaterial1" : items
			});
		});
	};
};

exports.addkommentare = function(db, PubSubClient){
	return function(req, res){
		db.collection('kommentarcollectioncga').insert({
			"material": req.body.textareaKommentar,
		}, function(err, result){
			if(err){
				res.send("There was a problem adding the information to the Database.");
			}
			else{
				PubSubClient.publish('/cga/material1/addkommentar',{
					"material": "CGA Material 1 wurde aktualisiert.",
					"hyperlink": "/home/cga/material1",
				}).then(function(){
					res.writeHead(200, 'OK');
					res.end;
				}, function(error){
					next(error);
				});
				res.redirect('/home/cga/material1');
			}
		});
	};
};
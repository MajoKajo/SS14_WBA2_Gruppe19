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
				res.send("There was a problem adding the information to the Database.");
			}
			else{
				PubSubClient.publish('/wba2/material1/addkommentar',{
					"material": "Ein neues Kommentar wurde hinzugefügt",
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
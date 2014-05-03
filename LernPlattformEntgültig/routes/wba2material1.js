//GET auf vorhandene Kommentare(laden in tabelle)
exports.ladekommentare = function(db){
	return function(req, res){
		db.collection('kommentarcollection').find().toArray(function(err, items){
			res.render('wba2material1', {
				"wba2material1" : items
			});
		});
	};
};

exports.addkommentare = function(db){
	return function(req, res){
		db.collection('kommentarcollection').insert({
			"material": req.body.textareaKommentar,
		}, function(err, result){
			if(err){
				res.send("There was a problem adding the information to the Database.");
			}
			else{
				res.redirect("/home/wba2/material1");
			}
		});
	};
};
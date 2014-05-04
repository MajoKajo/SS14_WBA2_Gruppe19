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

exports.addkommentare = function(db){
	return function(req, res){
		db.collection('kommentarcollectioncga').insert({
			"material": req.body.textareaKommentar,
		}, function(err, result){
			if(err){
				res.send("There was a problem adding the information to the Database.");
			}
			else{
				res.redirect("/home/cga/material1");
			}
		});
	};
};
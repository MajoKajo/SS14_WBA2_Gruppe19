//LOGIN
exports.login = function(req, res){
	res.render('login', {title: 'Bitte melde dich an.'});
};

//HOME
exports.home = function(req, res){
	res.render('home', {title: 'Homebildschirm'});
};

//WBA2
exports.wba2 = function(req, res){
	res.render('wba2', {title: 'WBA2'});
};

//CGA
exports.cga = function(req, res){
	res.render('cga', {title: 'CGA'});
};
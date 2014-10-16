exports.recordReading = function(req, res){
	res.render('index', { title: 'Express1' });
}

exports.returnReadings = function(req,res){
	res.render('index', { title: 'Express234' });
}
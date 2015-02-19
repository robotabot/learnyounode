//how to structure an idiomatic module which responds to callbacks

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	
	var results = [];

	fs.readdir(dir, function(err, list) {
		if(err) return callback(err); //idiomatic callback error handling
		
		list = list.filter(function(filename) {
			return path.extname(filename) === '.' + ext; 
		});
	
		callback(null, results); //idiomatic callback return
	});
};

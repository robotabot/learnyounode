var fs = require('fs');

if(process.argv.length > 2) {
	var input = process.argv[2];
	var extension = process.argv[3];
};

// log files in a dir which have passed extension
fs.readdir(input, function(err, list) {
	if(err) throw err;
	list.forEach(function(filename) {
		if(filename.split('.')[1] === extension) console.log(filename);
	});
});

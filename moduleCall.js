var fileModule = require('./fileModule');
var arg1 = process.argv[2];
var arg2 = process.argv[3];

fileModule(arg1, arg2, function (err, data) {
		if (err) {
			console.log('ERROR ' + err);
		}else {
			data.forEach(function (file) {
				console.log(file);
			})
		};
});

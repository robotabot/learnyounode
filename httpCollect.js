var http = require('http');
var data = '';

//callback demo
var callback = function (res) {
	res.setEncoding('utf-8');
	
	res.on('data', function (dataEvent) {
		data += dataEvent;
	});

	res.on('error', console.log);

	res.on('end', function () {
		console.log(data.length + '\n' + data);
	});
};

http.get(process.argv[2], callback).end();

var http = require('http');

http.get(8000, function (res) {
	res.setEncoding('utf-8');
	res.on('data', console.log);
	res.on('error', console.log);
});

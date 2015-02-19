var http = require('http');
var url = require('url');

// creates json api server
var server = http.createServer(function (req, res) {
  var urlObject = url.parse(req.url, true);
  var pathName = urlObject.pathname;
  var time = new Date(urlObject.query.iso);

	// responds to /api/parsetime like so:
	// { hour :12, minute :13, second :14 }
  if (pathName === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({"hour": time.getHours(),
                              "minute": time.getMinutes(),
                              "second": time.getSeconds()}));
    res.end();
  }
	
	// responds to /api/unixtime like so:
	// { 1 095 379 198.75 }
	if (pathName === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({"unixtime": time.getTime()}));
    res.end();
  }

  res.end();
});

server.listen(process.argv[2]);

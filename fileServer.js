var http = require('http');
var fs = require('fs');

var fileLoc = process.argv[3];

// a server cat :meow:
var server = http.createServer(function (req, res) {
  var s = fs.createReadStream(fileLoc).once('open', function (){
    res.writeHead(200, {'content-type': 'text/plain'});
    this.pipe(res);
  }).once('error', function (e) {
    console.log(e);
    res.end('SERVER CAT ERROR');
  });
});

server.listen(process.argv[2]);

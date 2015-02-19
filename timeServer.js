//TCP time server
//Listens to tcp connections on a cli argument port
//Returns "YYYY-MM-DD hh:mm"

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  socket.end(strftime('%F %R'));
});

server.listen(process.argv[2]);
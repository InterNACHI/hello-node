'use strict';

var http = require('http');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end('{"status":"ok"}');
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
	console.log('Listening on port ' + port);
});
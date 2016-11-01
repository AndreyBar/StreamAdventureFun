var http = require('http'),
	through = require('through2'),
	server = http.createServer(function (request, response) {
		if (request.method == 'POST') {
			request.pipe(through(function(buf, _, next) {
				this.push(buf.toString().toUpperCase());
				next();
			})).pipe(response);
		}
	});

server.listen(process.argv[2]);
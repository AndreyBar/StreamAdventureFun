var through = require('through2'),
	stream = through(write);

function write(buffer, encoding, next) {
	buffer = buffer.toString().toUpperCase();
	this.push(buffer);
	next();	
}

process.stdin.pipe(stream).pipe(process.stdout);
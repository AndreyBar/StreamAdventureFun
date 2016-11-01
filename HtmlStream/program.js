var trumpet = require('trumpet'),
	through = require('through2'),
	tr = trumpet(),
	loud = tr.select('.loud').createStream();

loud.pipe(through(function(buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next()
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
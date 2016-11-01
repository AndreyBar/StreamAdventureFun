var split = require('split'),
	through = require('through2'),
	even = true;

process.stdin
	.pipe(split())
	.pipe(through(function (line, encoding, next) {
		if (even == true) {
			even = false;
			console.log(line.toString().toLowerCase());
			next();
		} else {
			even = true;
			console.log(line.toString().toUpperCase());
			next();
		}
	})).pipe(process.stdout);
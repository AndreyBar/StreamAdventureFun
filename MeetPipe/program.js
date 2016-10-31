var fs = require("fs");

var st = fs.createReadStream(process.argv[2]).pipe(process.stdout);
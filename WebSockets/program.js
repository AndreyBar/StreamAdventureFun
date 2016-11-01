var websocket = require('websocket-stream'),
	ws = websocket('ws://localhost:8099');

ws.write('hello\n');

// Alternative one through creating a new stream with 'hello' inside.

// var websocket = require('websocket-stream'),
// 	Readable = require('stream').Readable,
// 	ws = websocket('ws://localhost:8099'),
// 	str = new Readable;

// str.push('hello\n');
// str.push(null);
// str.pipe(ws);
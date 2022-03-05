const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Hello Node JS World!');
});

server.listen('5000');

console.log('Server run successfully');

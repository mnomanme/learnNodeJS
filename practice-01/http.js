const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello Programmers ');
		res.write('Whats your update?');
		res.end();
	} else if (req.url === '/about') {
		res.write('This is about us page');
		res.end();
	} else {
		console.log('Page Not Found');
		res.end();
	}
});

server.listen(4000);

console.log('server run successfully 4000');

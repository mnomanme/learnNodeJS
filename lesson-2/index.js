const fs = require('fs');

const http = require('http');

const server = http.createServer((req, res) => {
	// writeFile
	if (req.url === '/') {
		fs.writeFile('index.txt', 'Welcome to Node JS', (err, data) => {
			if (err) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write('File write Fail');
				res.end();
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write('File write Success');
				res.end();
			}
		});
	}

	// readFile
	if (req.url === '/') {
		// Asynchronous
		fs.readFile('./index.html', (err, data) => {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});

		// Synchronous
		/*
		const myData = fs.readFileSync('./index.html');
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(myData);
		res.end();
    */
	}
});

server.listen('5000');

console.log('FS server is running');

const fs = require('fs');

const http = require('http');

const server = http.createServer((req, res) => {
	// existsFile
	if (req.url === '/') {
		// Asynchronous
		fs.exists('./index.html', (err, data) => {
			if (err) {
				res.end('True');
			} else {
				res.end('False');
			}
		});

		// Synchronous
		const exists = fs.existsSync('./demo.txt');
		if (exists) {
			res.end('File is already exists');
		} else {
			res.end('File not Found');
		}
	}

	// deleteFile
	if (req.url === '/') {
		// Asynchronous
		fs.unlink('./delete.txt', (err, data) => {
			if (err) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write('File delete Fail');
				res.end();
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write('File delete Success');
				res.end();
			}
		});

		// Synchronous
		const deleteFile = fs.unlinkSync('./delete2.txt');
		if (deleteFile) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write('File delete Fail');
			res.end();
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write('File delete Success');
			res.end();
		}
	}

	// renameFile
	if (req.url === '/') {
		// Asynchronous
		fs.rename('./homeNew.txt', 'homeNew2.txt', (err, data) => {
			if (err) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write('Rename file Fail');
				res.end();
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write('Rename file Success');
				res.end();
			}
		});

		// Synchronous
		const result = fs.renameSync('./homeNew.txt', 'homeNewSync.txt');
		if (result) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write('Rename file Fail');
			res.end();
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write('Rename file Success');
			res.end();
		}
	}

	// writeFile
	if (req.url === '/') {
		// Asynchronous
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

		// Synchronous
		const fileError = fs.writeFileSync('demo.txt', 'Welcome to Node JS 2');
		if (fileError) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write('File write Fail');
			res.end();
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write('File write Success');
			res.end();
		}
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
		const myData = fs.readFileSync('./index.html');
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(myData);
		res.end();
	}
});

server.listen('5000');

console.log('FS server is running');

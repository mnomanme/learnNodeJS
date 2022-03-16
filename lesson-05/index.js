const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();
const app = express();

app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));

// File Upload
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './my-uploads');
	},
	filename: function (req, file, cb) {
		// const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		// cb(null, file.originalname + '-' + uniqueSuffix);
		cb(null, file.originalname);
	},
});

const uploadFile = multer({ storage: storage }).single('myfile');

// simple GET request
app.get('/', (req, res) => {
	res.send('Hello Simple GET request');
});

// Get Request With URL Query
app.get('/name', (req, res) => {
	const firstName = req.query.firstName;
	const lastName = req.query.lastName;

	res.send(firstName + ' ' + lastName);
});

// Working With Get Request Header
app.get('/header', (req, res) => {
	const firstLetter = req.header('firstLetter');
	const lastLetter = req.header('lastLetter');

	res.send(firstLetter + ' ' + lastLetter);
});

// Simple Post Request
app.post('/post', (req, res) => {
	res.send('This is simple post request');
});

// Post Request With URL Query
app.post('/postQuery', (req, res) => {
	const firstName = req.query.firstName;
	const lastName = req.query.lastName;

	res.send(firstName + ' ' + lastName);
});

// Post Request With Header Properties
app.post('/postHeader', (req, res) => {
	const username = req.header('username');
	const password = req.header('password');

	res.send(username + ' ' + password);
});

// Post application-json
app.post('/bodyParser', (req, res) => {
	const data = req.body;
	const dataString = JSON.stringify(data);

	const jsonName = data['name'];

	res.send(dataString);
});

// Working With Multipart Form Data
app.post('/multipart', (req, res) => {
	const data = req.body;

	res.end(JSON.stringify(data));
});

// File Upload
app.post('/file', (req, res) => {
	uploadFile(req, res, (error) => {
		if (error) {
			res.send('File upload failed');
		} else {
			res.send('File upload success');
		}
	});
});

app.listen(5000, () => {
	console.log('Server run successfully on port 5000');
});

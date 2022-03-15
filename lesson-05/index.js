const express = require('express');

const app = express();

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

app.listen(5000, () => {
	console.log('Server run successfully on port 5000');
});

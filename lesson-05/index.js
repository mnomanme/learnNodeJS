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

app.listen(5000, () => {
	console.log('Server run successfully on port 5000');
});

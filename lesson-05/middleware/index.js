const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('I am application level');

	next();
});

app.get('/', (req, res) => {
	res.send('This is Home');
});

app.get('/about', (req, res) => {
	res.send('This is About');
});

app.use('/contact', (req, res, next) => {
	console.log('I am routing level level');

	next();
});

app.get('/contact', (req, res) => {
	res.send('This is Contact');
});

app.listen(5000, () => {
	console.log('Server run successfully port 5000');
});

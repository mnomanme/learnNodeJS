const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express JS');
});

app.post('/home', (req, res) => {
	res.send('Hello Home');
});

app.put('/about', (req, res) => {
	res.send('Hello About');
});

app.delete('/contact', (req, res) => {
	res.send('Hello Contact');
});

// simple string response
// res.send() === response body
// res.end() === response ending point
app.get('/stringOne', (req, res) => {
	res.send('String One Response');
});

app.post('/stringTwo', (req, res) => {
	res.send('String Two Response');
});

// response status code
app.get('/statusOne', (req, res) => {
	res.status(401);
	res.send('Unauthorized Access');
});

// JSON response
app.get('/jsonResponse', (req, res) => {
	const jsonResponse = [
		{
			name: 'Mohammad Noman',
			age: 25,
			occupation: 'Unemployed',
			city: 'Dhaka',
		},
		{
			name: 'Mohammad Faruque',
			age: 21,
			occupation: 'Student',
			city: 'Jashore',
		},
		{
			name: 'Mohammad Baki',
			age: 22,
			occupation: 'Developer',
			city: 'Rajshai',
		},
	];
	res.json(jsonResponse);
});

// response download
app.get('/download', (req, res) => {
	res.download('./index.js');
});

// response redirecet
app.get('/bangladesh', (req, res) => {
	res.redirect(`http://localhost:4000/pakistan`);
});

app.get('/pakistan', (req, res) => {
	res.send('This is Pakistan');
});

// response header
app.get('/header', (req, res) => {
	res.append('name', 'Mohammad Noman');
	res.append('age', '25');
	res.append('city', 'dhaka');
	res.status(201);
	res.send('This is Header');
	res.end();
});

// response set cookies
app.get('/cookies', (req, res) => {
	res.cookie('name', 'Mohammad Faruque');
	res.cookie('age', '30');
	res.cookie('city', 'Jashore');
	res.cookie('profession', 'student');
	res.send('This is Cookies');
});

// response clear cookies
app.get('/cookiesClear', (req, res) => {
	res.clearCookie('name');
	res.clearCookie('profession');
	res.clearCookie('city');

	res.send('This is Cookies clear');
});

app.listen(4000, () => {
	console.log('Server run successfully on port 4000');
});

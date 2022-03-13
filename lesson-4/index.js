const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express JS');
});

app.listen(4000, () => {
	console.log('Server run successfully on port 4000');
});

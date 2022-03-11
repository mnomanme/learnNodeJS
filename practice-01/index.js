const path = require('path');

const os = require('os');

const fs = require('fs');

const myPath = `F:/mern-stack/practice-01/index.js`;

console.log(path.parse(myPath));
console.log(path.basename(myPath));
console.log(path.extname(myPath));
console.log(path.dirname(myPath));

console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());

fs.writeFileSync('myFile.txt', 'Hello Programmers ');
fs.appendFileSync('myFile.txt', 'Welcome to Node JS World!');

const data = fs.readFileSync('myFile.txt');

console.log(data);
console.log(data.toString());

fs.readFile('myFile.txt', (err, data) => {
	console.log(data.toString());
});

// event

const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', ({ period, text }) => {
	console.log(`we need to run ${period} ${text}`);
});

// raise an event
emitter.emit('bellRing', {
	period: 'first',
	text: 'period ended',
});

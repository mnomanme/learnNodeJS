const EventEmitter = require('events');

class School extends EventEmitter {
	startPeriod() {
		console.log('Class Started');

		// raise event when bell rings
		// raise an event
		this.emit('bellRing', {
			period: 'first',
			text: 'period ended',
		});
	}
}

module.exports = School;

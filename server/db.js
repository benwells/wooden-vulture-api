import Mongoose from 'mongoose';

export default function(callback) {
	// connect to a database if needed
	Mongoose.connect('mongodb://localhost/testdb');

	var db = Mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
		console.log('connected!');
		callback();
	});
}

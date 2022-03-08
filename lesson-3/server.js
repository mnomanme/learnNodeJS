// username === merndb-learn
// password === ns81vrzfd4uytmay
// DB Name === merndb
// DB Collection === dbList

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://merndb-learn:ns81vrzfd4uytmay@cluster0.cy70y.mongodb.net/merndb?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect((err) => {
	const collection = client.db('merndb').collection('dbList');

	if (err) {
		console.log('DB Connection Failed');
	} else {
		console.log('DB Connection Success');
	}

	client.close();
});

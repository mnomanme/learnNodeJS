const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://merndb-learn:ns81vrzfd4uytmay@cluster0.cy70y.mongodb.net/merndb?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(() => {
	const collection = client.db('merndb').collection('dbList');

	console.log('DB connect successfully');

	/*
	// insertData
	const dataList = { name: 'Mehe Sultana', age: 20, District: 'Sylhet' };

	collection
		.insertOne(dataList)
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});
	console.log('Data insert success');

	// deleteData
	const deleteData = { age: 20 };
	collection
		.deleteOne(deleteData)
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});
	console.log('Data delete success');

	// deleteMany
	collection
		.deleteMany()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});

	console.log('delete all data');

	// findOne
	const findOne = {};
	collection
		.findOne(findOne)
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});

	// findAll
	collection.find({}).toArray((err, documents) => {
		console.log(documents);
	});
	*/

	// projection
	// const itemProjection = {};
	// const itemObj = { projection: { District: 1 } };
	// collection.find(itemProjection, itemObj).toArray((err, documents) => {
	// 	console.log(documents);
	// });

	// query
	const itemQuery = { District: 'Dhaka', age: 20 };
	collection.find(itemQuery).toArray((err, documents) => {
		console.log(documents);
	});

	// client.close();
});

// username === merndb-learn
// password === ns81vrzfd4uytmay
// DB Name === merndb
// DB Collection === dbList

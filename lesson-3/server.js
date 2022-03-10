const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cy70y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(() => {
	const collection = client.db(`${process.env.DB_NAME}`).collection(`${process.env.DB_Collection}`);

	console.log('DB connect successfully');

	// insertData
	const dataList = { name: 'Sezan', age: 26, District: 'Mymenshing' };

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

	// projection
	const itemProjection = {};
	const itemObj = { projection: { District: 1 } };

	collection.find(itemProjection, itemObj).toArray((err, documents) => {
		console.log(documents);
	});

	// query
	const itemQuery = { District: 'Dhaka', age: 20 };

	collection.find(itemQuery).toArray((err, documents) => {
		console.log(documents);
	});

	// limit
	collection
		.find()
		.limit(3)
		.toArray((err, documents) => {
			console.log(documents);
		});

	// sort
	collection
		.find()
		.sort({ age: -1 })
		.toArray((err, documents) => {
			console.log(documents);
		});

	// update
	const oldData = { age: 20 };
	const newData = { $set: { name: 'Mohammad Noman', District: 'Rajshahi' } };

	collection.updateOne(oldData, newData, (err, documents) => {
		console.log(documents);
	});

	// createNewCollection
	const newCollection = client.db(`${process.env.DB_NAME}`);

	newCollection.createCollection(`${process.env.DB_New_Collection}`, (err, result) => {
		console.log(result);
	});

	// deleteCollection
	const deleteCollection = client.db(`${process.env.DB_NAME}`);

	deleteCollection.dropCollection(`${process.env.DB_New_Collection}`, (err, result) => {
		console.log(result);
	});

	// client.close();
});


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://EddiesTest:EddiesTest@cluster0.uoeztxi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect((err) => {
if (err) throw err;
});


  const collection = client.db("eddie-db").collection("eddie-collection");



module.exports = {collection, ObjectId}


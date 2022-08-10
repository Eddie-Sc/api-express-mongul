

const { MongoClient, ServerApiVersion, objectID } = require('mongodb')mo;
const uri = "mongodb+srv://EdwardsTest:EdwardsTest@cluster0npm i mongodb.rddgdoy.mongodb.net/?retryWrites=true&w=majority";;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) throw err;

});
const collection = client.db("test").collection("devices");

module.exports = {collection, objectID}
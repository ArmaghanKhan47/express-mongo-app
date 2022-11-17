const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:Toyotagt8657@testing.pqcnuwu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client.db("testing");
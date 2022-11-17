const db = require('../db/index');
const collection = db.collection('users');

exports.get = async () => {
  const users = await collection.find({}).toArray();
  return users;
}

exports.create = async (user_object) => {
  const user = await collection.insertOne(user_object);

  return user;
}
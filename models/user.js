const db = require('../db/index');
const { ObjectId } = require('mongodb');
const collection = db.collection('users');

exports.get = async (search_options = {}) => {
  const users = await collection.find(search_options).toArray();
  return users;
}

exports.create = async (user_object) => {
  const user = await collection.insertOne(user_object);

  return user;
}

exports.update = async (user_id, user_object) => {
  const user = await collection.updateOne({_id: ObjectId(user_id)}, { $set : user_object});
  return user;
}

exports.delete = async (user_id) => {
  const user = await collection.deleteOne({_id: ObjectId(user_id)});
  return user;
}
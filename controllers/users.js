const { ObjectId } = require('mongodb');
const user_model = require('../models/user');

exports.index = async (req, res) => {
  const users = await user_model.get();

  return res.send({
    users
  });
}

exports.store = async (req, res) => {
  const { username, password } = req.body;
  const user = await user_model.create({
    username,
    password
  });

  return res.send({
    user
  });
}

exports.show = async (req, res) => {
  const { id } = req.params;
  const user = await user_model.get({ _id: ObjectId(id)});
  return res.send({
    user
  });
}

exports.update = async (req, res) => {
  const { id } = req.params;
  const user = await user_model.update(id, req.body);
  return res.send({
    user
  });
}

exports.delete = async (req, res) => {
  const { id } = req.params;
  const user = await user_model.delete(id);
  return res.send({
    user
  });
}
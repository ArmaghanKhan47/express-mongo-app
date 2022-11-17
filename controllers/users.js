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
  
}
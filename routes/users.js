const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');


exports.init = () => {

  router.get('/', controller.index);
  router.post('/', controller.store);

  this.app.use('/api/users', router);
};

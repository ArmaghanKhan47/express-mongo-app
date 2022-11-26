const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');


exports.init = () => {

  router.get('/', controller.index);
  router.post('/', controller.store);
  router.get('/:id', controller.show);
  router.post('/:id', controller.update);
  router.delete('/:id', controller.delete);

  this.app.use('/api/users', router);
};

const express = require('express');
const path = require('path');
const userController = require('../Controllers/usersController');
const fs = require('fs');

const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/todolist.html'));
});
router.route('/api/getAllUsers').get(userController.getAllUser);
router.route('/api/insertUser').post(userController.insertUser)

module.exports = router;

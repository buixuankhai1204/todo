const express = require('express');
const path = require('path');
const userService = require('../Services/user');
const fs = require('fs');

const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/todolist.html'));
});
router.route('/api/getAllUsers').get(userService.getAllUser);

module.exports = router;

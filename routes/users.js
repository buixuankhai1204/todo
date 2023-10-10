const express = require('express');
const path = require('path');
const userController = require('../Controllers/usersController');
const fs = require('fs');

const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/insertView.html'));
});

router.get('/list/:queryId', async function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/detailUserPage.html'));
});
router.get('/list', async function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/listView.html'));
});
router.route('/api/getAllUsers').get(userController.getAllUser);
router.route('/api/insertUser').post(userController.insertUser)
router.route('/api/updateStatusUsers').put(userController.updateStatusLissUser)
router.route('/api/deleteUsers').delete(userController.deleteUsers)
router.route('/api/getDetailUser/:queryId').get(userController.getUserById)
router.route('/api-v1/insertDatabase').get(userController.inserDatabase);
module.exports = router;

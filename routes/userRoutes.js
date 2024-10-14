const express = require('express');
const UserController = require('../controllers/userController')

const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUserById);

module.exports = router;
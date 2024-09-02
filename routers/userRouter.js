const express = require('express');
const UserHandler = require('../handlers/userHandler');

const router = express.Router();

router.get('/users', UserHandler.getAllUsers);
router.get('/users/:id', UserHandler.getUserById);
router.post('/users', UserHandler.createUser);
router.put('/users/:id', UserHandler.updateUser);
router.delete('/users/:id', UserHandler.deleteUser);

module.exports = router;

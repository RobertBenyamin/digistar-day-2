const express = require('express');
const UserHandler = require('../handlers/userHandler');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Public endpoints
router.post('/register', UserHandler.createUser);
router.post('/login', UserHandler.loginUser);

// Protected endpoints
router.get('/users', verifyToken, UserHandler.getAllUsers);
router.get('/users/:id', verifyToken, UserHandler.getUserById);
router.put('/users/:id', verifyToken, UserHandler.updateUser);
router.delete('/users/:id', verifyToken, UserHandler.deleteUser);

module.exports = router;

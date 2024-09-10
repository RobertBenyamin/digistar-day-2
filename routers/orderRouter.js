const express = require('express');
const OrderHandler = require('../handlers/orderHandler');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Protected endpoints
router.get('/orders', verifyToken, OrderHandler.getAllOrders);
router.get('/orders/:id', verifyToken, OrderHandler.getOrderById);
router.post('/orders', verifyToken, OrderHandler.createOrder);
router.put('/orders/:id', verifyToken, OrderHandler.updateOrder);

module.exports = router;

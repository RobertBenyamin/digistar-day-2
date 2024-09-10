const Order = require('../models/orderModel');

class OrderRepository {
    static async createOrder(orderData) {
        const order = new Order(orderData);
        return order.save();
    }

    static async getAllOrders() {
        return Order.find();
    }

    static async getOrderById(orderId) {
        return Order.findOne({ orderId });
    }

    static async updateOrder(orderId, updatedData) {
        return Order.findOneAndUpdate(
            { orderId },
            { ...updatedData, updatedAt: Date.now() },  
            { new: true }  
        );
    }
}

module.exports = OrderRepository;

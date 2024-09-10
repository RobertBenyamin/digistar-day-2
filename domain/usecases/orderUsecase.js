const OrderRepository = require('../repositories/orderRepository');

class OrderUsecase {
    static async getAllOrders() {
        return OrderRepository.getAllOrders();
    }
    
    static async getOrderById(orderId) {
        return OrderRepository.getOrderById(orderId);
    }

    static async createOrder(userId, name, quantity, price) {
        const orderData = { userId, name, quantity, price };
        return OrderRepository.createOrder(orderData);
    }
    
    static async updateOrder(orderId, name, quantity, price, status) {
        const updatedData = { name, quantity, price, status };
        return OrderRepository.updateOrder(orderId, updatedData);
    }
}

module.exports = OrderUsecase;

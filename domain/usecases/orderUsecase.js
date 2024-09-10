const OrderRepository = require('../repositories/orderRepository');

class OrderUsecase {
    static async createOrder(userId, product, amount) {
        const orderData = { userId, product, amount };
        return OrderRepository.createOrder(orderData);
    }

    static async getAllOrders() {
        return OrderRepository.getAllOrders();
    }

    static async getOrderById(orderId) {
        return OrderRepository.getOrderById(orderId);
    }

    static async updateOrder(orderId, product, amount, status) {
        const updatedData = { product, amount, status };
        return OrderRepository.updateOrder(orderId, updatedData);
    }
}

module.exports = OrderUsecase;

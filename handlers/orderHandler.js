const OrderUsecase = require('../domain/usecases/orderUsecase');

class OrderHandler {
    static async getAllOrders(req, res) {
        try {
            const orders = await OrderUsecase.getAllOrders();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch orders' });
        }
    }

    static async getOrderById(req, res) {
        try {
            const { id } = req.params;
            const order = await OrderUsecase.getOrderById(id);

            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ error: 'Order not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch order' });
        }
    }

    static async createOrder(req, res) {
        try {
            const { userId, name, quantity, price } = req.body;

            if (!userId || !name || !quantity || !price) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const newOrder = await OrderUsecase.createOrder(userId, name, quantity, price);
            res.status(201).json(newOrder);
        } catch (err) {
            res.status(500).json({ error: 'Failed to create order' });
        }
    }

    static async updateOrder(req, res) {
        try {
            const { id } = req.params;
            const { name, quantity, price, status } = req.body;

            if (!name || !quantity || !price || !status) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const updatedOrder = await OrderUsecase.updateOrder(id, name, quantity, price, status);

            if (updatedOrder) {
                res.status(200).json(updatedOrder);
            } else {
                res.status(404).json({ error: 'Order not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to update order' });
        }
    }
}

module.exports = OrderHandler;

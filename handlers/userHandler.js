const UserUsecase = require('../domain/usecases/userUsecase');

class UserHandler {
    static async getAllUsers(req, res) {
        try {
            const users = await UserUsecase.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }

    static async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await UserUsecase.getUserById(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }

    static async createUser(req, res) {
        try {
            const { name, password } = req.body;
            if (!name || !password) {
                return res.status(400).json({ error: 'Invalid request body' });
            }

            const newUser = await UserUsecase.createUser(name, password);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }

    static async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const { name, password } = req.body;

            if (!name || !password) {
                return res.status(400).json({ error: 'Invalid request body' });
            }

            const updatedUser = await UserUsecase.updateUser(userId, name, password);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    static async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const deletedUser = await UserUsecase.deleteUser(userId);
            if (deletedUser) {
                res.status(200).json({ message: 'Successfully deleted user' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}

module.exports = UserHandler;

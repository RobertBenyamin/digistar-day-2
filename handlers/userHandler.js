const UserUsecase = require('../domain/usecases/userUsecase');

class UserHandler {
    static getAllUsers(req, res) {
        const users = UserUsecase.getAllUsers();
        res.json(users);
    }

    static getUserById(req, res) {
        const userId = req.params.id;
        const user = UserUsecase.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    static createUser(req, res) {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(400).json({ error: 'Invalid request body' });
        }

        const newUser = UserUsecase.createUser(name, password);
        res.status(201).json(newUser);
    }

    static updateUser(req, res) {
        const userId = req.params.id;
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ error: 'Invalid request body' });
        }

        const updatedUser = UserUsecase.updateUser(userId, name, password);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }

    static deleteUser(req, res) {
        const userId = req.params.id;
        const deletedUser = UserUsecase.deleteUser(userId);
        if (deletedUser) {
            res.json({ message: 'Successfully deleted user' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
}

module.exports = UserHandler;

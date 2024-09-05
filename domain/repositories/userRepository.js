const User = require('../models/userModel');

class UserRepository {
    static async getAllUsers() {
        return User.find();
    }

    static async getUserById(userId) {
        return User.findOne({ userId });
    }

    static async createUser(userData) {
        const user = new User(userData);
        return user.save();
    }

    static async updateUser(userId, updatedUser) {
        return User.findOneAndUpdate({ userId }, updatedUser, { new: true });
    }

    static async deleteUser(userId) {
        return User.findOneAndDelete({ userId });
    }
}

module.exports = UserRepository;

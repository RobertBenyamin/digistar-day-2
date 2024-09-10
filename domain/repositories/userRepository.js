const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    static async loginUser(name, password) {
        const user = await User.findOne({ name });
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign(
            { userId: user.userId, name: user.name },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        return { token, user };
    }

    static async registerUser(name, password) {
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const newUser = new User({ name, password });
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser.userId, name: newUser.name },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        return { token, user: newUser };
    }
}

module.exports = UserRepository;

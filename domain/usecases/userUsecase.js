const crypto = require('crypto');
const User = require('../models/userModel');
const UserRepository = require('../repositories/userRepository');

class UserUsecase {
    static getAllUsers() {
        return UserRepository.getAllUsers();
    }

    static getUserById(id) {
        return UserRepository.getUserById(id);
    }

    static createUser(name, password) {
        const newUser = new User(crypto.randomUUID(), name, password);
        return UserRepository.createUser(newUser);
    }

    static updateUser(id, name, password) {
        const updatedUser = { name, password };
        return UserRepository.updateUser(id, updatedUser);
    }

    static deleteUser(id) {
        return UserRepository.deleteUser(id);
    }
}

module.exports = UserUsecase;

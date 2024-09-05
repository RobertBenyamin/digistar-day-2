const UserRepository = require('../repositories/userRepository');

class UserUsecase {
    static async getAllUsers() {
        return UserRepository.getAllUsers();
    }

    static async getUserById(id) {
        return UserRepository.getUserById(id);
    }

    static async createUser(name, password) {
        const newUser = { name, password };
        return UserRepository.createUser(newUser);
    }

    static async updateUser(id, name, password) {
        const updatedUser = { name, password };
        return UserRepository.updateUser(id, updatedUser);
    }

    static async deleteUser(id) {
        return UserRepository.deleteUser(id);
    }
}

module.exports = UserUsecase;

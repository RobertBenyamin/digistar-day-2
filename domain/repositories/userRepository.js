let users = [];

class UserRepository {
    static getAllUsers() {
        return users;
    }

    static getUserById(id) {
        return users.find(u => u.id === id);
    }

    static createUser(user) {
        users.push(user);
        return user;
    }

    static updateUser(id, updatedUser) {
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUser };
            return users[index];
        }
        return null;
    }

    static deleteUser(id) {
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            return users.splice(index, 1);
        }
        return null;
    }
}

module.exports = UserRepository;

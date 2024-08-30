const express = require('express');
const crypto = require("crypto");
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const newUser = { id: crypto.randomUUID(), name, password };
    users.push(newUser);

    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, password } = req.body;
    
    if (!name || !password) {
        return res.status(400).json({ error: 'Invalid request body' });
    }
    
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users[userIndex] = { name, password };
    res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.json({message: 'Successfully deleted user', user: deletedUser});
});

app.use((req, res, next) => {
    res.status(404).json({ error: '404 not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

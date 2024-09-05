const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/digistar')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use(express.json());
app.use(userRouter);

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

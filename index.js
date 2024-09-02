const express = require('express');
const userRouter = require('./routers/userRouter');

const app = express();
const port = 3000;

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

// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// In-memory store for tasks
let tasks = [];

// Route to get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Route to add a new task
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

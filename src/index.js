const express = require('express');
const app = express();
const port = 3000;

// Middleware để parse JSON
app.use(express.json());

// Danh sách users tạm thời (thay cho database)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET: Lấy tất cả users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
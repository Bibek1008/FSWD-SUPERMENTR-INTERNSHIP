const express = require('express');
const path = require('path');
const app = express();

const tasks = [
  { id: '1', title: 'Connect frontend', completed: true },
  { id: '2', title: 'Fetch backend API', completed: false }
];

app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/tasks', (req, res) => res.json(tasks));
app.get('/api/status', (req, res) => res.json({ status: 'OK' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3006;
app.listen(port, () => console.log(`Connect the Stack server running on port ${port}`));

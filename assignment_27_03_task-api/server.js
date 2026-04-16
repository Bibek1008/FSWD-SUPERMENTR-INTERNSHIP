const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('Task API is running. Use /api/tasks')); 

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Task API listening on port ${port}`));

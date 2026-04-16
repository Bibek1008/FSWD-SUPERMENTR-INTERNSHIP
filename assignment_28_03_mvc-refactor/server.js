const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('MVC Refactor Task API running.'));

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`MVC Refactor app listening on port ${port}`));

const express = require('express');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', dashboardRoutes);

app.get('/', (req, res) => res.send('Role Guard API'));

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Role Guard server running on port ${port}`));

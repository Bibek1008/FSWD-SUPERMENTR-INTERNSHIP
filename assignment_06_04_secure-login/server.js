const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('Secure Login API')); 

const port = process.env.PORT || 3004;
app.listen(port, () => console.log(`Secure Login server running on port ${port}`));

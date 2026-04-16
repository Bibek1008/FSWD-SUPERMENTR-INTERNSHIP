const express = require('express');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

const app = express();
app.use(express.json());

app.use('/api/books', booksRouter);
app.use('/api/authors', authorsRouter);

app.get('/', (req, res) => {
  res.send('Route Master API is running. Use /api/books or /api/authors');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Route Master listening on port ${port}`);
});

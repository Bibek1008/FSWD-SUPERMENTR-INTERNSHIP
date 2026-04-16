const express = require('express');
const router = express.Router();

const books = [
  { id: '1', title: 'Node.js Guide', authorId: '10' },
  { id: '2', title: 'Express Essentials', authorId: '11' }
];

router.get('/', (req, res) => res.json(books));
router.get('/:id', (req, res) => {
  const book = books.find((book) => book.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

module.exports = router;

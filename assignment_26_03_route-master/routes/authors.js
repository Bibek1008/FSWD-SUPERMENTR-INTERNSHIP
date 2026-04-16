const express = require('express');
const router = express.Router();

const authors = [
  { id: '10', name: 'A. Author' },
  { id: '11', name: 'B. Writer' }
];

router.get('/', (req, res) => res.json(authors));
router.get('/:id', (req, res) => {
  const author = authors.find((author) => author.id === req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  res.json(author);
});

module.exports = router;

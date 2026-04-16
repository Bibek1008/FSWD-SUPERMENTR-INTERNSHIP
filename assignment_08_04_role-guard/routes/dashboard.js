const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/user', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}`, role: req.user.role });
});

router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Super secret admin data', role: req.user.role });
});

module.exports = router;

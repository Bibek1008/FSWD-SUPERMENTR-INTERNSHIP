const express = require('express');
const router = express.Router();

const tasks = [
  { id: '1', title: 'Buy groceries', completed: false },
  { id: '2', title: 'Write homework', completed: true }
];

router.get('/', (req, res) => res.json(tasks));
router.get('/:id', (req, res) => {
  const task = tasks.find((item) => item.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});
router.post('/', (req, res) => {
  const { title, completed = false } = req.body;
  const newTask = { id: `${Date.now()}`, title, completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
router.put('/:id', (req, res) => {
  const task = tasks.find((item) => item.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;
  res.json(task);
});
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex((item) => item.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;

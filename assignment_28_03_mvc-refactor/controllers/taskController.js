const taskModel = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  res.json(taskModel.getAll());
};

exports.getTaskById = (req, res) => {
  const task = taskModel.findById(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

exports.createTask = (req, res) => {
  const task = taskModel.create(req.body);
  res.status(201).json(task);
};

exports.updateTask = (req, res) => {
  const task = taskModel.update(req.params.id, req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

exports.deleteTask = (req, res) => {
  const removed = taskModel.remove(req.params.id);
  if (!removed) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
};

const tasks = [
  { id: '1', title: 'Set up project structure', completed: false },
  { id: '2', title: 'Refactor routes into MVC', completed: false }
];

exports.getAll = () => tasks;
exports.findById = (id) => tasks.find((task) => task.id === id);
exports.create = ({ title, completed = false }) => {
  const task = { id: `${Date.now()}`, title, completed };
  tasks.push(task);
  return task;
};
exports.update = (id, data) => {
  const task = tasks.find((item) => item.id === id);
  if (!task) return null;
  task.title = data.title ?? task.title;
  task.completed = data.completed ?? task.completed;
  return task;
};
exports.remove = (id) => {
  const index = tasks.findIndex((item) => item.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

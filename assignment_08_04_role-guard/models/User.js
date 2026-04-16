const users = [];

exports.create = ({ name, email, passwordHash, role = 'user' }) => {
  const user = { id: `${Date.now()}`, name, email, passwordHash, role };
  users.push(user);
  return user;
};

exports.findByEmail = (email) => users.find((user) => user.email === email);
exports.findById = (id) => users.find((user) => user.id === id);

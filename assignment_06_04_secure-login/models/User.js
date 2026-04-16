const users = [];

exports.create = ({ name, email, passwordHash }) => {
  const user = { id: `${Date.now()}`, name, email, passwordHash };
  users.push(user);
  return user;
};

exports.findByEmail = (email) => users.find((user) => user.email === email);
exports.findById = (id) => users.find((user) => user.id === id);

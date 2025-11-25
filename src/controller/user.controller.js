// temporary in-memory users
let users = [
  { id: 1, name: "Praveen", email: "praveen@example.com" }
];

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({ user: newUser });
};

module.exports = {
  getAllUsers,
  createUser
};

const users = require("../data/users");
const bcrypt = require("bcryptjs");

// User Registration
const registerUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  if (!fullname || !username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const existingUser = users.find(
    user => user.email === email || user.username === username
  );

  if (existingUser) {
    return res.status(409).json({
      message: "User already exists"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    fullname,
    username,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser.id,
      fullname: newUser.fullname,
      username: newUser.username,
      email: newUser.email
    }
  });
};

// User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  const existingUser = users.find(
    user => user.email === email || user.username === email
  );

  if (!existingUser) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  const isPasswordMatch = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }

  res.status(200).json({
    message: "Login successful",
    user: {
      id: existingUser.id,
      fullname: existingUser.fullname,
      username: existingUser.username,
      email: existingUser.email
    }
  });
};

module.exports = {
  registerUser,
  loginUser
};
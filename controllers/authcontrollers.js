const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    res.json({ message: "User Registered Successfully" });

  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User Not Found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, "secretkey", {
    expiresIn: "1h"
  });

  res.json({
    token,
    role: user.role,
    message: "Login Successful"
  });
};
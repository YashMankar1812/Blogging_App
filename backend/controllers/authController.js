const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Token = require('../models/TokenSchema'); 

// SignUp
const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }

};

// Login

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Save the token in the database
    await Token.create({ userId: user._id, token });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// Logout

const logout = async (req, res) => {
  const { token } = req.body; // The token should be sent from the client
  try {
    await Token.findOneAndDelete({ token });
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Server error during logout' });
  }
};
module.exports = { signUp, login, logout };

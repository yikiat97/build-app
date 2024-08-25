const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Call the login service
    const { token, user } = await userService.userLogin(email, password);

    // Respond with the token and user details
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    // Handle specific error messages and respond with the appropriate status code
    if (error.message === 'User not found') {
      res.status(404).json({ message: error.message });
    } else if (error.message === 'Invalid credentials') {
      res.status(401).json({ message: error.message });
    } else {
      // General server error
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  }
};


module.exports = {
    getAllUsers,
    login,
  };
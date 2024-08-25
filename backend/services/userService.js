const userRepository = require('../repos/userRepo');
const dotenv = require('dotenv')

dotenv.config();

const getAllUsers = async () => {
    return await userRepository.getAllUsers();
  };

const userLogin = async (username , password , email) => {
  try {
    const user = userRepository.getUserByEmail(email)
    if (!user){
      throw new Error("User not found")
    }

    const passwordMatch = () => {
      if (password === user.password ){
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
      }
      throw new Error('Invalid credentials');
    }

    return passwordMatch

  } catch(error){
    throw new Error(error.message)
  }
}

  module.exports = {
    getAllUsers,
    userLogin
  };
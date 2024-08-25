const db = require('../config/database');

const getAllUsers = async () => {
    const [rows, fields] = await db.query('SELECT * FROM accounts')
    return rows;
  };

const getUserByEmail = async(email) => {
  const rows = await db.query('SELECT * from accounts WHERE email = ?', [email])
  return rows[0];
}

  module.exports = {
    getAllUsers,
    getUserByEmail,
  }
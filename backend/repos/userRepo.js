const db = require('../config/database');

const getAllUsers = async () => {
  const [rows, fields] = await db.query('SELECT * FROM accounts')
  return rows;
  };


const getUserByEmail = async(email) => {
  const rows = await db.query('SELECT * from accounts WHERE email = ?', [email])
  return rows[0];
}


const addUser = async user => {
  const { username, email, password } = user;
  const [result] = await db.query(
    "INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
  // Return the new user with the generated ID
  return { id: result.insertId, ...user };
};


const deleteUserById = async id => {
  const [result] = await db.query("DELETE FROM accounts WHERE id = ?", [id]);
  return result.affectedRows; // Returns the number of affected rows
};

  module.exports = {
    getAllUsers,
    getUserByEmail,
    addUser,
    deleteUserById
  };
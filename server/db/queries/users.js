const db = require('../index');

const getAllUsers = async () => {
  const data = await db.query(
    'SELECT * FROM users;');
  return data.rows;
};

const getUserById = async (id) => {
  const data = await db.query(
    `SELECT * FROM users
     WHERE id = $1;`,
    [id]
  );
  return data.rows[0];
};

const addUser = async (name, email, password, phone) => {
  const data = await db.query(
    `INSERT INTO users (first_name, email, password, phone_number) 
    VALUES ($1, $2, $3, $4) 
    RETURNING *;`,
    [name, email, password, phone]
  );
  return data.rows[0];
};

const getUserByLoginDetails = async (email, password) => {
  const data = await db.query(
    `SELECT * FROM users 
    WHERE email = $1 AND password = $2;`,
    [email, password]);
  return data.rows;
};


module.exports = { getAllUsers, getUserById, addUser, getUserByLoginDetails };
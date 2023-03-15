const db = require('../index');

const getAllBooks = async () => {
  const data = await db.query(
    'SELECT * FROM books;'
  );
  return data.rows;
};

const getBooksByUserId = async (id) => {
  const data = await db.query(
    `SELECT * FROM books WHERE user_id = $1;`, [id]
  );
  return data.rows;
};

const addBook = async (user_id, title, author, location, photo) => {
  const data = await db.query(
    `INSERT INTO books (user_id, title, author, location, photo)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`,
    [user_id, title, author, location, photo]
  );

};

module.exports = { getAllBooks, getBooksByUserId, addBook };
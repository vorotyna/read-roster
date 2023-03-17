const db = require('../index.js');

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

const addBook = async (book) => {
  const data = await db.query(
    `INSERT INTO books (user_id, title, author, location, photo)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`,
    [book.user_id, book.title, book.author, book.location, book.photo]
  );
  return data.rows[0];
};

module.exports = { getAllBooks, getBooksByUserId, addBook };
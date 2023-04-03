const db = require('../index.js');

const getAllBooksAndAlerts = async () => {
  const data = await db.query(
    'SELECT * FROM books JOIN alerts ON books.id = book_id;'
  );
  return data.rows;
};

const getAllBooksAndAlertsByUserId = async (token) => {
  const data = await db.query(
    `SELECT * 
    FROM books 
    JOIN alerts ON books.id = book_id 
    WHERE books.user_id = $1 AND alerts.user_id = $1;`,
    [token]
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

const deleteBook = (book) => {
  return db.query(
    `DELETE FROM books
    USING alerts ON books.id = alerts.book_id
    WHERE books.id = $1
    RETURNING *;`
    [book.book_id]
  );
};


module.exports = { getBooksByUserId, addBook, getAllBooksAndAlerts, getAllBooksAndAlertsByUserId, deleteBook };
const db = require('../index');

const addAlerts = async (alert) => {
  const data = await db.query(
    `INSERT INTO alerts (book_id, user_id, due_date, SMS, email, calendar)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
    [alert.book_id, alert.user_id, alert.due_date, alert.SMS, alert.email, alert.calendar]
  );
  return data.rows[0];
};

const updateAlerts = async (alert) => {
  const data = await db.query(
    `UPDATE alerts (book_id, user_id, due_date, SMS, email, calendar)
    SET SMS = $1, email = $2, calendar = $3
    WHERE book_id = $4
    RETURNING *;`,
    [alert.book_id, alert.SMS, alert.email, alert.calendar]
  );
};

module.exports = { addAlerts, updateAlerts };
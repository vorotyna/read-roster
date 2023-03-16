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

module.exports = { addAlerts };
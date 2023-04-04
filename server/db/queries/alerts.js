const db = require('../index');

const addAlerts = async (alert) => {
  const data = await db.query(
    `INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email, calendar)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`,
    [alert.book_id, alert.user_id, alert.due_date, alert.alert_time, alert.SMS, alert.email, alert.calendar]
  );
  return data.rows[0];
};

const updateAlerts = async (alert) => {
  console.log(alert);
  const data = await db.query(
    `UPDATE alerts
    SET SMS = $1, email = $2, calendar = $3
    WHERE book_id = $4
    RETURNING *;`,
    [alert.SMS, alert.email, alert.calendar, alert.book_id]
  );
  return data.rows[0];
};

module.exports = { addAlerts, updateAlerts };
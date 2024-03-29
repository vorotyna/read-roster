const db = require('../index');

const addAlerts = async (alert) => {
  const data = await db.query(
    `INSERT INTO alerts (book_id, user_id, due_date, alert_time, SMS, email)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
    [alert.book_id, alert.user_id, alert.due_date, alert.alert_time, alert.SMS, alert.email]
  );
  return data.rows[0];
};

const updateAlerts = async (alert) => {
  console.log(alert);
  const data = await db.query(
    `UPDATE alerts
    SET SMS = $1, email = $2
    WHERE book_id = $3
    RETURNING *;`,
    [alert.SMS, alert.email, alert.book_id]
  );
  return data.rows[0];
};

const updateSMS_sid = async (SMS_sid, title) => {
  const data = await db.query(
    `UPDATE alerts
    SET SMS_sid = $1
    WHERE book_id = (
        SELECT id
        FROM books
        WHERE title = $2
    )
    RETURNING *;`,
    [SMS_sid, title]
  );
  return data.rows[0];
};

const updateEmail_id = async (email_id, title) => {
  const data = await db.query(
    `UPDATE alerts
    SET email_id = $1
    WHERE book_id = (
        SELECT id
        FROM books
        WHERE title = $2
    )
    RETURNING *;`,
    [email_id, title]
  );
  return data.rows[0];
};

const retrieveSMS_sid = async (book_id) => {
  const data = await db.query(
    `SELECT SMS_sid
    FROM alerts
    WHERE book_id = $1`,
    [book_id]
  );
  return data.rows[0];
};

const retrieveEmail_id = async (book_id) => {
  const data = await db.query(
    `SELECT email_id
    FROM alerts
    WHERE book_id = $1`,
    [book_id]
  );
  return data.rows[0];
};

module.exports = { addAlerts, updateAlerts, updateSMS_sid, updateEmail_id, retrieveSMS_sid, retrieveEmail_id };
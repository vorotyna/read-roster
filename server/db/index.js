// Database connections
require('dotenv').config();
const { Pool } = require('pg');

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASS,
  port: DB_PORT,
  database: DB_NAME || "readroster"
});

pool.connect().then(() => {
  console.log("Database connection established.");
}).catch(e => {
  throw new Error(e);
});

module.exports = pool;
const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'basketball_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


db.getConnection()
  .then(conn => {
    console.log(' Connected to Database success...');
    conn.release();
  })
  .catch(err => {
    console.error('Database connection failed:', err.message);
  });

module.exports = db;
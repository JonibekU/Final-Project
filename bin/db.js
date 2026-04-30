const mysql = require('mysql2');

// ✅ Create pool (NO createConnection anymore)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'cs208demo',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Middleware
function dbMiddleware(req, res, next) {
  req.db = pool;
  next();
}

module.exports = { dbMiddleware };
const mysql = require('mysql2');

// ✅ Create pool (NO createConnection anymore)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'appuser',
  password: 'password123',
  database: 'cs208demo'
});

// ✅ Middleware
function dbMiddleware(req, res, next) {
  req.db = pool;
  next();
}

module.exports = { dbMiddleware };
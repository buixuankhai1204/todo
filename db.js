
const mysql = require('mysql'); // Use 'mysql2' for a promise-based version

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'todo',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;

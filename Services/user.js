const db = require('../db');
module.exports = class User {
    static async getAllUser(req, res, next) {
        db.query('SELECT * FROM user', (err, users) => {
            if (err) {
                console.error('Error executing query:', err);
                return null;
            }
            return res.status(200).json({
                status: "success",
                data: users,
                message: "get all users succees!"
            });
        });
    }
}
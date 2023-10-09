const db = require('../db');
module.exports = class User {
    static async getAllUser(req, next) {
        try {
            req.params.pages = req.params.pages * 1 || 1;
            const page = req.params.pages;
            const limit = req.query.limit;
            const skip = (page - 1) * limit || 10;
            const skipTo = (page - 1) * limit + 10 || 10;
            let [rows] = await db.query('SELECT * FROM `inquiry` WHERE `Check` = 0');
            if (rows.length !== 0) {
                return [rows, true];
            } else {
                return ["cannot get all rows", false];
            }
            // db.query("SELECT * FROM `inquiry`", function (err, rows, fields) {
            //     // Connection is automatically released when query resolves
            //     if (users.length !== 0) {
            //         return [users, true];
            //     } else {
            //         return ["cannot get all rows", false];
            //     }
            // });

        } catch (err) {
            return [err.sqlMessage, false]
        }

    }

    static async insertUser(data, next) {
        try {
            const [user] = await db.query('INSERT INTO `inquiry` SET ?', data);
            if (user.length !== 0) {
                return [user, true];
            }
        } catch (err) {
            return [err.sqlMessage, false]
        }
    }

    static async updateStatusUser(data, next) {
        try {
            const listUserId = req.body.listId;
                const [users] = await db.query('UPDATE `inquiry` SET `Check` = 1 WHERE `Check` = 0');
            if (user.length !== 0) {
                return [user, true];
            }
        } catch (e) {
            return [e.sqlMessage, false]

        }
    }
}

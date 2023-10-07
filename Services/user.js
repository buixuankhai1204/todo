const db = require('../db');
module.exports = class User {
    static async getAllUser(req, res, next) {
        try {
            const [users, fields] = await db.execute('SELECT * FROM `user`');
            console.log(users);
            if (users.length !== 0) {
                return [users, true];
            }
        } catch (err) {
            return [err.sqlMessage, false]
        }

    }

    static async insertUser(data, next) {
        try {
            const [user] = await db.query('INSERT INTO `user` SET ?', data);
            const [insertedRow] = await db.query('SELECT * FROM `user` WHERE id = ?', [user.insertId]);
            if (insertedRow.length !== 0) {
                return [insertedRow, true];
            }

        } catch (err) {
            return [err.sqlMessage, false]
        }
    }

    static async updateStatusUser(data, next) {

    }
}
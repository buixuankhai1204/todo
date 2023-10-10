const db = require('../db');
module.exports = class User {

    static async getuserById(id, next) {
        try {
            let [rows] = await db.query('SELECT * FROM `inquiry` WHERE `id` = ?', [id]);
            if (rows.length !== 0) {
                return [rows, true];
            } else {
                return ["user Id not exist", false];
            }
        } catch (e) {
            return [err.sqlMessage, false]
        }
    }

    static async getAllUser(req, next) {
        try {
            let page = 1;
            if (req.query.page) {
                page = req.query.page * 1;
            }
            let limit = 10;
            if (req.query.limit) {
                limit = req.query.limit * 1
            }
            const skip = (page - 1) * limit || 0;
            let [rows] = await db.query('SELECT * FROM `inquiry` LIMIT ? OFFSET ?', [limit, skip]);
            if (rows.length !== 0) {
                return [rows, true];
            } else {
                return ["cannot get all rows", false];
            }
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

    static async updateStatusUsers(listUserIds, next) {
        try {

            const [users] = await db.query('UPDATE `inquiry` SET `Check` = ? WHERE `id` IN (?)', ['1', listUserIds]);
            if (users.length === 0) {
                const error = users;
                return [error, false];
            }

            const listUsers = await db.query('SELECT * FROM `inquiry` WHERE `id` IN (?)', [listUserIds]);
            if (users.length !== 0) {
                return [users, true];
            }
        } catch (e) {
            return [e.sqlMessage, false]

        }
    }

    static async deleteUsers(listUserIds, next) {
        try {

            const [users] = await db.query('DELETE FROM `inquiry` WHERE `id` IN (?)', [listUserIds]);
            if (users.length !== 0) {
                return [users, true];
            }
        } catch (e) {
            return [e.sqlMessage, false]

        }
    }
}

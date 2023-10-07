const db = require('../db');
module.exports = class User {
    static async getAllUser(req, res, next) {

        const [users, fields] = await db.execute('SELECT * FROM `user`');
        console.log(users);
        if(users.length ===0) {
            return new Error('cannot get all user');
        }

        return users;
    }

    static async insertUser(data, next) {
        try {
            console.log(data);
            const [user] = await db.query('INSERT INTO `user` SET ?', data);
                const [insertedRow] = await db.query('SELECT * FROM `user` WHERE id = ?', [user.insertId]);
            if(insertedRow.length === 0) {
                return new Error('can not insert new insertedRow');
            }

            return insertedRow;
        } catch (err) {
            console.log(err.sqlMessage)
        }

    }

    static async updateStatusUser(data, next) {
        db.query('UPDATE INTO user SET ?', {
            name: data.name,
            status: data.status,
            email: data.semail
        }, function (err, users) {
            if (err) {
                return err;
            } else {
                return user;
            }
        })
    }
}
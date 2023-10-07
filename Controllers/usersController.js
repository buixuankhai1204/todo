const user = require('../Services/user')

module.exports = class userController {
    static async getAllUser(req, res, next) {


        const users = await  user.getAllUser();

        return res.status(200).json({
            status: "success",
            data: users,
            message: "get all users success"
        })
    }

    static async insertUser(req, res, next) {
        const name = req.body.name;
        const status = req.body.status;
        const email = req.body.email;
        const age = req.body.age;
        const userRequest = {
            name : name,
            status : status,
            email : email,
            age : age,
        }
        const userService = await user.insertUser(userRequest, next);
        return res.status(200).json({
            status: "success",
            data: userService,
            message: "insert user success"
        })
    }
}

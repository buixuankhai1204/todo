const user = require('../Services/user')

module.exports = class userController {
    static async getAllUser(req, res, next) {

        const [users, status] = await user.getAllUser(req, next );
        if (status === true) {
            res.status(200).json({
                status: "success",
                data: users,
                message: "get all users success"
            })
        } else {
            res.status(200).json({
                status: "fail",
                message: users
            })
        }
    }

    static async insertUser(req, res, next) {
        const name = req.body.name;
        const email = req.body.email;
        const companyName = req.body.companyName;
        const countryCode = req.body.countryCode * 1;
        const phoneNumber = req.body.phoneNumber;
        const content = req.body.content;
        const userRequest = {
            Name: name,
            Email: email,
            CompanyName: companyName,
            CountryCode: countryCode,
            PhoneNumber: phoneNumber,
            Content: content,
        }
        console.log(userRequest)
        const [userService, statusCheck] = await user.insertUser(userRequest, next);

        if (statusCheck === false) {
            return res.status(200).json({
                status: "fail",
                message: userService
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: userService,
                message: "insert user success"
            })
        }
    }
}

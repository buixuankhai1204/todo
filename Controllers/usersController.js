const user = require('../Services/user')

module.exports = class userController {

    static async getUserById(req, res, next) {
        if (!req.body.queryId) {
            req.body.queryId = req.params.queryId;
        }
        const [userDoc, statusCheck] = await user.getuserById(req.body.queryId, next);

        if (statusCheck === false) {
            return res.status(200).json({
                status: "fail",
                message: userDoc
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: userDoc,
                message: "get one user success"
            })
        }
    }

    static async getAllUser(req, res, next) {

        const [users, status] = await user.getAllUser(req, next);
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

    static async updateStatusLissUser(req, res, next) {
        const listUserIds = req.body.listIds.split(',');
        const [updateUsers, statusCheck] = await user.updateStatusUsers(listUserIds, next);

        if (statusCheck === false) {
            return res.status(200).json({
                status: "fail",
                message: updateUsers
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: updateUsers,
                message: "update list users success"
            })
        }
    }

    static async deleteUsers(req, res, next) {
        const listUserIds = req.body.listIds.split(',');
        const [deleteUsers, statusCheck] = await user.deleteUsers(listUserIds, next);

        if (statusCheck === false) {
            return res.status(200).json({
                status: "fail",
                message: deleteUsers
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: deleteUsers,
                message: "delete list user success"
            })
        }
    }

    static async inserDatabase(req, res, next) {
        for (let i = 0; i < 1000000; i++) {
            var name = "Paul" + i;
            var email = `palul${i}@gmail.com`;
            var companyName = `innorix${i}`;
            var countryCode = i;
            var phoneNumber = "0982238983" + i;
            var content = "Paul content " + i;
            const userRequest = {
                Name: name,
                Email: email,
                CompanyName: companyName,
                CountryCode: countryCode,
                PhoneNumber: phoneNumber,
                Content: content,
            }
            const [userService, statusCheck] = await user.insertUser(userRequest, next);
        }

    }


}

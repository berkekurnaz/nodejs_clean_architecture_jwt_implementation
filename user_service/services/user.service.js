var User = require('../models/user.model')
var jwtService = require("../services/jwt.service")

exports.getUsers = async function (query) {
    try {
        var users = await User.find(query)
        return users;
    } catch (e) {
        throw Error(`Error while Paginating Users`)
    }
}

exports.login = async function (username, password) {
    try {
        var user = await User.findOne({username, password});
        if(user && user.validPassword(password)){
            let token = jwtService.generateJwtToken({
                id: user._id,
                username: user.username,
                mail: user.mail
            });
            return {
                token,
                user,
            }
        }
    } catch (e) {
        console.log(e)
        throw Error(`Error while Login User: ${username} - ${password}`)
    }
}

exports.createUser = async function (user) {
    try {
        let newUser = new User();
        newUser.username = user.username;
        newUser.name = user.name;
        newUser.mail = user.mail;
        newUser.description = user.description;
        newUser.password = user.password;
        newUser.setPassword(user.password); 

        await newUser.save();
        return newUser;
    } catch (e) {
        throw Error(`Error while Create User: ${user}`)
    }
}
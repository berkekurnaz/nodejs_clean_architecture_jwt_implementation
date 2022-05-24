var UserService = require('../services/user.service')    

exports.getMe = async function (req, res, next) {
    try {
        var users = await UserService.getUsers({_id: req.user.id})
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.login = async function (req, res, next) {
    let username = req.body.username ? req.body.username : "";
    let password = req.body.password ? req.body.password : "";
    try {
        var findUser = await UserService.login(username, password);
        if(findUser){
            return res.status(200).json({ status: 200, data: findUser, message: "Login operations is successfully" });
        }else{
            return res.status(401).json({ status: 401, data: findUser, message: "Username or password is wrong" });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (req, res, next) {
    try {
        var usersSameUsername = await UserService.getUsers({username: req.body.username});
        if(usersSameUsername.length == 0){
            var usersSameMail = await UserService.getUsers({mail: req.body.mail});
            if(usersSameMail.length == 0){
                let createUser = await UserService.createUser(req.body);
                return res.status(200).json({ status: 201, data: createUser, message: "User created successfully" });
            }else{
                return res.status(401).json({ status: 401, data: [], message: "You created account with same mail address before" });
            }
            
        }else{
            return res.status(401).json({ status: 401, data: [], message: "You created account with same username before" });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
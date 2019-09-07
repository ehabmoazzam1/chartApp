let User = require('../db/user.js')

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

module.exports.login = async function(req, res){
    
    let userObj = new User
    let userData = await userObj.getAllData()
    let is_exist = false
    let result

    // console.log(userData)

    for (var i = 0; i < userData.length; i++){
        var user = userData[i]

        if (user.email === req.body.email && user.password === req.body.password){
            is_exist == true
            result = user

            res.status(201).json(result)
            return
        }
    }

    if (is_exist == false){
        // user didn't exist, must add on json

        result = {
            "_id": uuidv4(),
            "username": req.body.email.split("@")[0],
            "email": req.body.email,
            "password": req.body.password,
            "role": 4,
            "group_id": 1,
            "channel_id": 1
        }

        userObj.add(result)
        res.status(201).json(result)
        return
    }    
}
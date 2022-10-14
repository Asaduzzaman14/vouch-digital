var jwt = require('jsonwebtoken');

exports.genaretToken = (userInfo) => {

    const paylode = {
        email: userInfo.email,
        role: userInfo.role
    }

    const token = jwt.sign(paylode, process.env.SECTER_TOKEN, {
        expiresIn: "2d"
    })

    return token;


}
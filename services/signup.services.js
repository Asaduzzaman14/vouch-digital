const User = require("../models/User")


exports.signupService = async (userInformation) => {
    const user = User.create(userInformation)
    return user

}
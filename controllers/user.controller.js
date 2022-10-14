const { signupService } = require("../services/signup.services")


exports.signup = async (req, res) => {
    try {
        console.log(req.body);
        const user = await signupService(req.body)
        res.status(200).json({
            status: "Success",
            message: "Successfully user Created"
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "user Can't created",
            error: error.message
        })
    }
}
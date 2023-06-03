import User from "../../../models/User"
import connectDB from "../../../app/middlewares/connectDB";
import bcrypt from "bcryptjs";
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
    if (req.method == "POST") {
        const rEmail = req.body.email;
        const rPassword = req.body.password;
        let user = await User.findOne({email: rEmail})
        console.log(user)

        if (user && (await bcrypt.compare(rPassword, user.password))) {
            var token = jwt.sign({email: user.email, password: user.password}, process.env.JWT_TOKEN);
            res.json({ token })

        }
        else {
            return res.status(400).json({error: "Invalid Credientails"})
        }

    }
    
    else {
        return res.status(200).json({ error: "Not Allowed" })
    }
}


export default connectDB(handler);
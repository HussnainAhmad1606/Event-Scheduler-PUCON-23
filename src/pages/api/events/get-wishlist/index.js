

import Favourite from "../../../../models/Favourite";
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (req, res) => {
    const username = req.body.username;
    if (req.method == "POST") {
        let fav = await Favourite.find({username:username});
        res.status(200).json({type: "success", events: fav})
       }

    else {
        res.status(400).json({type: "error", message: "ERROR. "})
    }
}

export default connectDB(handler);
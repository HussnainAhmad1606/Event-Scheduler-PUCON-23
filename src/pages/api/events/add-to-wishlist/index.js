

import Favourite from "../../../../models/Favourite";
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (req, res) => {

    if (req.method == "POST") {
        let fav = new Favourite({
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,   
            poster: req.body.poster,
            username: req.body.username
            })
        await fav.save()
        res.status(200).json({type: "success", message: "Added to favourites "})
       }

    else {
        res.status(400).json({type: "error", message: "ERROR. "})
    }
}

export default connectDB(handler);
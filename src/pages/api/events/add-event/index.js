

import Event from "../../../../models/Event";
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (req, res) => {

    if (req.method == "POST") {
        let event = new Event({
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time,
            poster: req.body.poster,
            duration: req.body.duration,
            limit: req.body.limit,
            })
        await event.save()
        res.status(200).json({success: "Event Added Successfully "})
       }

    else {
        res.status(400).json({error: "This method is not allowed. "})
    }
}

export default connectDB(handler);
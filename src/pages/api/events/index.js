
import Event from "src/models/Event"
import connectDB from "../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    let sections = await Event.find({})
    return response.status(200).json({sections})
}


export default connectDB(handler); 
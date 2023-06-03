
import Event from "src/models/Event"
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    let events = await Event.find({})
    return response.status(200).json({events})
}


export default connectDB(handler); 
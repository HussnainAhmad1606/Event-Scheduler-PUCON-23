
import Event from "src/models/Event"
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    const slug = request.body.slug;
    let event = await Event.find({slug:slug})
    return response.status(200).json({event})
}


export default connectDB(handler); 
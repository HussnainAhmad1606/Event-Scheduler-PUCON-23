
import Event from "src/models/Event"
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    let author = request.body.author;
    let events = await Event.find({author: author})
    return response.status(200).json({events})
}


export default connectDB(handler); 
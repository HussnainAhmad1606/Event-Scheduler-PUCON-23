
import Event from "src/models/Event"
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    let eventSlug = request.body.slug;
    let username = request.body.username;
    await Event.updateOne({slug: eventSlug}, {$push:{"members":username}});


    return response.status(200).json({type: "success", message: "Event Joined Successfully"})
}


export default connectDB(handler); 
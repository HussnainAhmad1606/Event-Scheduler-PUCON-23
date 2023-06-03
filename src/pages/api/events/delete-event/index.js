
import Event from "src/models/Event"
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    await Event.deleteOne(
    { "_id": request.body._id }
    );

    return response.status(200).json({"message": "Event Deleted successfully"})
    
}


export default connectDB(handler); 
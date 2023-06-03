
import Event from "src/models/Event"
import connectDB from "../../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    const id = 
    await Event.updateOne(
    { "_id": request.body._id },
     {
        $set: { "name": request.body.name, "slug": request.body.slug,
        "description": request.body.description,
        "date":  request.body.date,
        "time": request.body.time,
        "poster": request.body.poster,
        "duration": request.body.duration,
        "eventType": request.body.type,
        "limit": request.body.limit
    
    } 
     }
    );

    return response.status(200).json({"message": "Updated successfully"})
    
}


export default connectDB(handler); 

import Event from "src/models/Event"
import connectDB from "../../../app/middlewares/connectDB";

const handler = async (request, response) => {
    if (request.method == "POST") {
        const option = request.body.option;
    const searchValue = request.body.searchValue;

    if (option == "Title") {
        let events = await Event.find({name:{$regex : searchValue}})
        return response.status(200).json({events})
    }
    else if (option == "Description") {
        let events = await Event.find({description:{$regex : searchValue}})
        return response.status(200).json({events})
    }
    else if (option == "Author") {
        let events = await Event.find({author:{$regex : searchValue}})
        return response.status(200).json({events})
    }
}
else {

    return response.status(400).json({message: "ERROR"})
    }
}


export default connectDB(handler); 
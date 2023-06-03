import mongoose from 'mongoose';
const { Schema } = mongoose;

const favSchema = new Schema({
  name: { type: String },
  slug: { type: String, unique:true },
  description: { type: String },
  poster: { type: String,},
  username: { type: String,},
}, { timestamps: true, versionKey: false });

mongoose.models = {}

export default mongoose.model("Favourite", favSchema);
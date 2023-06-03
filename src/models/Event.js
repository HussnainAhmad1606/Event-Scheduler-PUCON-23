import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String },
  slug: { type: String, unique:true },
  description: { type: String },
  date: { type: String },
  time: { type: String },
  poster: { type: String,},
  duration: { type: String },
  limit: Number,
  members: { type: [String]},
}, { timestamps: true, versionKey: false });

mongoose.models = {}

export default mongoose.model("events", eventSchema);
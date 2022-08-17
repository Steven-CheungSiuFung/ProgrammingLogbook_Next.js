import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: String,
  },
});

export default mongoose.models["Log"]
  ? mongoose.model("Log")
  : mongoose.model("Log", logSchema);

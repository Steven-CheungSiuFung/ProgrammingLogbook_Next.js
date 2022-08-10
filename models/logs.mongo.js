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
    type: String,
    required: true,
  },
});

export default mongoose.models["Log"]
  ? mongoose.model("Log")
  : mongoose.model("Log", logSchema);

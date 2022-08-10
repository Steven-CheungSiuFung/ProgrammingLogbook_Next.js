import mongoose from "mongoose";
import Log from "../models/logs.mongo";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connect error", error);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Disconnection error", error);
  }
};

export const saveNewLogDB = async (newLog) => {
  try {
    await connectDB();

    const logDoc = new Log(newLog);
    const result = await logDoc.save();
    console.log("new doc created ==> ", result);
    await disconnectDB();

    return result;
  } catch (error) {
    console.error("save new log to database fail", error);
  }
};

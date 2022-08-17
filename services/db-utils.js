import mongoose from "mongoose";
import Log from "../models/logs.mongo";
import User from "../models/users.mongo";

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

    if (result) {
      console.log("New document saved!");
    }

    await disconnectDB();
    return result;
  } catch (error) {
    console.error("save new log to database fail", error);
  }
};

export const readAllLogsDB = async (userEmail) => {
  try {
    await connectDB();

    const logs = await Log.find({ createdBy: userEmail })
      .sort("-date")
      .select("title content date createdBy");

    await disconnectDB();
    return logs;
  } catch (error) {
    console.error("read logs from database fail", error);
  }
};

export const saveUserDB = async (newUser) => {
  try {
    await connectDB();

    const user = new User(newUser);
    const result = await user.save();

    if (result) {
      console.log("New User saved!");
    }

    await disconnectDB();
    return result;
  } catch (error) {
    console.error("save new log to database fail", error);
  }
};

export const getUserDB = async (userEmail) => {
  try {
    await connectDB();

    const user = await User.findOne({ email: userEmail });

    await disconnectDB();
    return user;
  } catch (error) {
    console.error("get user from database fail", error);
  }
};

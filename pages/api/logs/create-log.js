import { createNewLog } from "../../../models/logs.models";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const logData = req.body;
    if (!logData || !logData.title || !logData.date || !logData.content) {
      return res.status(400).json({ message: "Missing required Input" });
    }
    try {
      const result = await createNewLog(logData);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: "post log error" });
    }
  }
  return res.status(405).json({ messgae: "Invalid request" });
};

export default handler;

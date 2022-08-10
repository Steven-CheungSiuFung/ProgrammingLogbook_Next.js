import { getAllLogs } from "../../../models/logs.models";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const result = await getAllLogs();
    return res.status(200).json(result);
  }
};

export default handler;

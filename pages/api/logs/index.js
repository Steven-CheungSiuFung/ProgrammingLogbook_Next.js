const handler = (req, res) => {
  if (req.method === "GET") {
    console.log("request accepted");
    return res.status(200).json({ message: "get all logs" });
  }
};

export default handler;

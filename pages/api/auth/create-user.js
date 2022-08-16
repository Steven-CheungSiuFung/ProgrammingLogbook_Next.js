import { createUser } from "../../../models/users.models";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid Request" });
    return;
  }
  const userData = req.body;
  if (!userData || !userData.email || !userData.password) {
    res.status(400).json({ message: "Invalid Input" });
    return;
  }
  try {
    const result = await createUser(userData);
    return res.status(201).json({ message: "User Created!" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
};

export default handler;

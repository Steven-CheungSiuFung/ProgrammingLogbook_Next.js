import { saveNewLogDB } from "../services/db-utils";

export const createNewLog = async (logData) => {
  const newLog = logData;
  try {
    const result = await saveNewLogDB(newLog);
    return result;
  } catch (error) {
    console.error("create new log error", error);
  }
};

import { saveNewLogDB, readAllLogsDB } from "../services/db-utils";

export const createNewLog = async (logData) => {
  const newLog = logData;
  try {
    const result = await saveNewLogDB(newLog);
    return result;
  } catch (error) {
    console.error("create new log error", error);
  }
};

export const getAllLogs = async () => {
  try {
    const result = await readAllLogsDB();
    return result;
  } catch (error) {
    console.error("get all logs error", error);
  }
};

import { saveNewLogDB, readAllLogsDB } from "../services/db-utils";

export const createNewLog = async (logData) => {
  const transformedDate = new Date(logData.date);
  const newLog = { ...logData, date: transformedDate };
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

import { hashPassword } from "../services/auth";
import { saveUserDB, getUserDB } from "../services/db-utils";

export const createUser = async (userData) => {
  const hashedPassword = await hashPassword(userData.password);
  const newUser = {
    email: userData.email,
    password: hashedPassword,
  };

  const user = await getUser(newUser.email);
  if (user && user.email === newUser.email) {
    throw new Error("User already exists");
  } else {
    const result = await saveUserDB(newUser);
    return result;
  }
};

export const getUser = async (userEmail) => {
  const user = await getUserDB(userEmail);
  console.log(user);
  return user;
};

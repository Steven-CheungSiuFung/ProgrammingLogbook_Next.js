import bcrypt from "bcrypt";

export const hashPassword = async (plaintPassword) => {
  const hashedPassword = await bcrypt.hash(plaintPassword, 12);
  return hashedPassword;
};

export const verifyPassword = async (plaintPassword, hashedPassword) => {
  const isVerified = await bcrypt.compare(plaintPassword, hashedPassword);
  return isVerified;
};

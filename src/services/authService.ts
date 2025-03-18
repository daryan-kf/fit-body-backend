import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  const userExist = await User.findOne({where: {email}});
  if (userExist) {
    throw new Error("User with this email already exist");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({username, email, password: hashPassword});

  const token = jwt.sign({userId: newUser.id}, JWT_SECRET, {
    expiresIn: "7d",
  });

  return {token, user: newUser};
};

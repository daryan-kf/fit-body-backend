import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const authMiddleware = async ({ req }: { req: IncomingMessage }) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>

    try {
      const user = jwt.verify(token, SECRET_KEY);
      return { user };
    } catch (error) {
      console.error('Invalid Token:', error);
      return { user: null };
    }
  }
  return { user: null };
};

import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

const sign = process.env.JWT_SECRET;

export const generateToken = (data) => {
  return jwt.sign(data, sign, { expiresIn: '30d' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, sign);
};

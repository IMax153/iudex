import { PrismaClient, User } from '@prisma/client';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  userId: string;
}

export const getUserFromToken = async (
  req: Request,
  photon: PrismaClient,
): Promise<User | null> => {
  const authorization = req.get('Authorization');

  if (authorization) {
    try {
      const token = authorization.replace('Bearer ', '');
      const tokenPayload = verify(token, process.env.ACCESS_TOKEN_SECRET) as TokenPayload;
      return tokenPayload
        ? await photon.users.findOne({ where: { id: tokenPayload.userId } })
        : null;
    } catch (error) {
      return null;
    }
  }

  return null;
};

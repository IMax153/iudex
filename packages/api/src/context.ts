import { PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';

import { getUserFromToken } from './utils/auth/getUserFromToken';

const prisma = new PrismaClient({
  debug: process.env.NODE_ENV !== 'production',
});

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  user: User | null;
}

interface CreateContextProps {
  req: Request;
  res: Response;
}

export const createContext = async ({ req, res }: CreateContextProps): Promise<Context> => ({
  prisma,
  req,
  res,
  user: await getUserFromToken(req, prisma),
});

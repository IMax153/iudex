import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  debug: process.env.NODE_ENV !== 'production',
});

export interface Context {
  prisma: PrismaClient;
}

export const createContext = (): Context => ({
  prisma,
});

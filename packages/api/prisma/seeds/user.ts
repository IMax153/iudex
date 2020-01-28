import { PrismaClient, UserCreateInput } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import faker from 'faker';

import { createMany } from './utils';

const generateUser = (): UserCreateInput => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: hashSync('Testing123*'),
});

export const generateUsers = (amount: number, prisma: PrismaClient) => {
  return createMany(amount, () => prisma.users.create({ data: generateUser() }));
};

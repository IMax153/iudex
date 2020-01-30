import { PrismaClient, FormCreateInput, FormField, User } from '@prisma/client';
import faker from 'faker';

import { createMany } from './utils';

const generateForm = (users: User[]): FormCreateInput => ({
  name: faker.company.companyName(),
  owner: { connect: { id: faker.random.arrayElement(users).id } },
});

export const generateForms = (amount: number, prisma: PrismaClient, users: User[]) => {
  return createMany(amount, () => prisma.forms.create({ data: generateForm(users) }));
};

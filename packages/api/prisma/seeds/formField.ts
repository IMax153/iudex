import { PrismaClient, Form, FormFieldCreateInput } from '@prisma/client';
import faker from 'faker';

import { createMany, inputTypes } from './utils';

const generateFormField = (forms: Form[]): FormFieldCreateInput => ({
  name: faker.lorem.word(),
  type: faker.random.arrayElement(inputTypes),
  form: { connect: { id: faker.random.arrayElement(forms).id } },
});

export const generateFormFields = (amount: number, prisma: PrismaClient, forms: Form[]) => {
  return createMany(amount, () => prisma.formFields.create({ data: generateFormField(forms) }));
};

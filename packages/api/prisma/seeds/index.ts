import { PrismaClient } from '@prisma/client';

import { generateForms } from './form';
import { generateFormFields } from './formField';
import { generateUsers } from './user';

const prisma = new PrismaClient({ debug: true });

const seed = async () => {
  await prisma.connect();

  console.log('Clearing database...');
  prisma.users.deleteMany({});
  prisma.formFields.deleteMany({});
  prisma.forms.deleteMany({});

  console.log('Creating users...');
  for await (const item of generateUsers(50, prisma));
  const users = await prisma.users.findMany();

  console.log('Creating forms...');
  for await (const item of generateForms(30, prisma, users));
  const forms = await prisma.forms.findMany();

  console.log('Creating form fields...');
  for await (const item of generateFormFields(100, prisma, forms));
};

seed()
  .then(() => {
    prisma.disconnect();
  })
  .catch(error => {
    console.error('[seed]: There was a problem seeding the database');
    console.error(error);
  });

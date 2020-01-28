import { FormFieldType } from '@prisma/client';

export const createMany = <T>(length: number, fn: () => T): T[] => {
  return Array.from({ length }).map(() => fn());
};

export const formFieldTypes: FormFieldType[] = [
  FormFieldType.Date,
  FormFieldType.DateTime,
  FormFieldType.Number,
  FormFieldType.Select,
  FormFieldType.String,
];

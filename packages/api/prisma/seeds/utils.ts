import { InputType } from '@prisma/client';

export const createMany = <T>(length: number, fn: () => T): T[] => {
  return Array.from({ length }).map(() => fn());
};

export const inputTypes: InputType[] = [
  InputType.Button,
  InputType.Checkbox,
  InputType.Color,
  InputType.Date,
  InputType.DateTimeLocal,
  InputType.Email,
  InputType.File,
  InputType.Hidden,
  InputType.Image,
  InputType.Month,
  InputType.Number,
  InputType.Password,
  InputType.Radio,
  InputType.Range,
  InputType.Reset,
  InputType.Search,
  InputType.Submit,
  InputType.Tel,
  InputType.Text,
  InputType.Time,
  InputType.Url,
  InputType.Week,
];

import { objectType } from 'nexus';

export const FormType = objectType({
  name: 'Form',
  description: 'A custom evaluation form created by a user',
  definition: t => {
    t.model.id();
    t.model.owner();
    t.model.fields();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

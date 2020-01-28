import { objectType } from 'nexus';

export const FormFieldType = objectType({
  name: 'FormField',
  description: 'An input field within a form',
  definition: t => {
    t.model.id();
    t.model.name();
    t.model.type();
    t.model.form();
    t.model.createdAt();
    t.model.updatedAt();
  },
});

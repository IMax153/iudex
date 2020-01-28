import { queryType } from 'nexus';

export const QueryType = queryType({
  definition: t => {
    t.crud.form();
    t.crud.forms();
    t.crud.formField();
    t.crud.formFields();
    t.crud.user();
    t.crud.users();
  },
});

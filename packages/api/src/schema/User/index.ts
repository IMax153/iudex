import { objectType } from 'nexus';

export * from './input';
export * from './mutation';
export * from './query';

export const UserType = objectType({
  name: 'User',
  description: 'A user registered with the application',
  definition: t => {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.email();
    t.model.forms();
    t.model.createdAt();
    t.model.updatedAt();

    t.field('fullName', {
      type: 'String',
      resolve: root => `${root.firstName} ${root.lastName}`,
    });
  },
});

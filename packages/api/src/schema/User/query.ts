import { queryField } from 'nexus';

export const UsersQuery = queryField('me', {
  type: 'User',
  description: 'The current authenticated User',
  nullable: true,
  resolve: (root, args, ctx) => ctx.user,
});

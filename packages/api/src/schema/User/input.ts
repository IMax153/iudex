import { inputObjectType } from 'nexus';

export const UserLoginInput = inputObjectType({
  name: 'UserLoginInput',
  definition(t) {
    t.string('email', { nullable: false });
    t.string('password', { nullable: false });
  },
});

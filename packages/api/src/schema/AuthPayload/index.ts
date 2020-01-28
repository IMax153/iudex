import { objectType } from 'nexus';

export * from './query';

export const AuthPayloadType = objectType({
  name: 'AuthPayload',
  description: 'The payload returned upon successful user authentication',
  definition(t) {
    t.field('user', { type: 'User' });
    t.string('accessToken');
  },
});

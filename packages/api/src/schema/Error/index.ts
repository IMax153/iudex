import { interfaceType } from 'nexus';

export const ErrorType = interfaceType({
  name: 'Error',
  description: 'An n error that occurred during execution of a resolver',
  definition(t) {
    t.string('message', {
      description: 'The message associated with the error',
    });
    t.resolveType(() => null);
  },
});

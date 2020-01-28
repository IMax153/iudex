import { compare } from 'bcryptjs';
import { arg, mutationField, objectType, unionType } from 'nexus';

import { createAccessToken, createRefreshToken } from '../../utils/auth/tokens';

export const LoginUserErrorType = objectType({
  name: 'LoginUserError',
  definition(t) {
    t.implements('Error');
    t.string('emailErrorMessage', { nullable: true });
    t.string('passwordErrorMessage', { nullable: true });
  },
});

export const LoginUserResult = unionType({
  name: 'LoginUserResult',
  description: 'The authentication payload object or any errors resulting from user login',
  definition(t) {
    t.members('AuthPayload', 'LoginUserError');
    t.resolveType(o => ('accessToken' in o ? 'AuthPayload' : 'LoginUserError'));
  },
});

export const LoginUserMutation = mutationField('login', {
  type: 'LoginUserResult',
  description: 'Attempts to login a user',
  args: { data: arg({ type: 'UserLoginInput', nullable: false }) },
  resolve: async (root, { data: { email, password } }, ctx) => {
    const user = await ctx.prisma.users.findOne({ where: { email } });

    if (!user) {
      return {
        __typename: 'LoginUserError',
        message: 'Invalid login',
        emailErrorMessage: `Unable to find user with email: ${email}`,
      };
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      return {
        __typename: 'LoginUserError',
        message: 'Invalid login',
        passwordErrorMessage: `Invalid password`,
      };
    }

    ctx.res.cookie(process.env.REFRESH_TOKEN_COOKIE_NAME, createRefreshToken(user), {
      httpOnly: true,
      path: '/',
    });

    return {
      __typename: 'LoginUserResult',
      accessToken: createAccessToken(user),
      user,
    };
  },
});

export const LogoutUserMutation = mutationField('logout', {
  type: 'Boolean',
  resolve: () => {
    // TODO: increment refreshTokenId in database to invalidate active refresh tokens
    return true;
  },
});

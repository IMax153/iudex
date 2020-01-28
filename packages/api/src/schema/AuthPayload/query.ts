import { queryField } from 'nexus';
import { verify } from 'jsonwebtoken';

import { createAccessToken, createRefreshToken } from '../../utils/auth/tokens';

interface RefreshTokenPayload {
  userId: string;
  refreshTokenId: string;
}

export const RefreshSessionQuery = queryField('refreshSession', {
  type: 'AuthPayload',
  nullable: true,
  resolve: async (root, args, ctx) => {
    const token = ctx.req.cookies[process.env.REFRESH_TOKEN_COOKIE_NAME];

    if (!token) {
      return null;
    }

    try {
      const payload = verify(token, process.env.REFRESH_TOKEN_SECRET) as
        | RefreshTokenPayload
        | undefined;

      if (!payload) return null;

      const user = await ctx.prisma.users.findOne({ where: { id: payload.userId } });

      if (!user || !user.refreshTokenId || !(user.refreshTokenId === payload.refreshTokenId)) {
        return null;
      }

      ctx.res.cookie(process.env.REFRESH_TOKEN_COOKIE_NAME, createRefreshToken(user), {
        httpOnly: true,
        path: '/',
      });

      return {
        accessToken: createAccessToken(user),
        user,
      };
    } catch (err) {
      return null;
    }
  },
});

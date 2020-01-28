import { User } from '@prisma/photon';
import { sign } from 'jsonwebtoken';

export const createAccessToken = (user: User): string => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

export const createRefreshToken = (user: User): string => {
  return sign(
    { userId: user.id /* refreshTokenId: user.refreshTokenId */ },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' },
  );
};

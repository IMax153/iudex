import Cors from 'cors';

export const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? '' : [/localhost/],
  credentials: true,
};

const cors = Cors(corsOptions);

export { cors };

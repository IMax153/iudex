import cookieParser from 'cookie-parser';
import { Router } from 'express';

import { cors, corsOptions } from './cors';

const middlewares = Router();

// Support for cross-origin requests
middlewares.use(cors);
middlewares.options('*', cors);

middlewares.use(cookieParser());

export { corsOptions, middlewares };

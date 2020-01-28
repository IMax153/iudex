// eslint-disable-next-line spaced-comment
/// <reference types="node" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly ACCESS_TOKEN_SECRET: string;
    readonly REFRESH_TOKEN_SECRET: string;
    readonly REFRESH_TOKEN_COOKIE_NAME: string;
  }
}

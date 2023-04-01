import {
  BASE_URL_LOCAL_AUTH,
  BASE_URL_LOCAL_REG,
  BASE_URL_LOCAL_API,
} from '@env';

const liveHostAuth = BASE_URL_LOCAL_AUTH;
const localHostAuth = BASE_URL_LOCAL_AUTH;
const liveHostApi = BASE_URL_LOCAL_API;
const localHostApi = BASE_URL_LOCAL_API;
const localHostReg = BASE_URL_LOCAL_REG;
export const isDevelopment = process.env.NODE_ENV === 'development';

export const hostAuth =
  process.env.NODE_ENV === 'development' ? localHostAuth : liveHostAuth;

export const hostApi =
  process.env.NODE_ENV === 'development' ? localHostApi : liveHostApi;

export const hostApiReg =
  process.env.NODE_ENV === 'development' ? localHostReg : localHostReg;

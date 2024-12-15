import type { RolesEnum } from 'contract/enums/Enums';

export interface ILoginRequest {
  identifier: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface ILogoutResponse {}

export interface IRefreshRequest {}

export interface IRefreshResponse {
  accessToken: string;
}

export interface IDecodedJwt {
  accountId: number;
  roles: RolesEnum[];
  exp?: number;
  iat?: number;
}

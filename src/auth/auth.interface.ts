import { AxiosInstance } from "axios";

export interface AuthGroupInstance {
  getAccessToken: () => Promise<GetAccessTokenResponse>;
}

export interface AuthConfig {
  apiInstance: AxiosInstance;
  clientId: string;
  clientSecret: string;
}

export interface GetAccessTokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
}

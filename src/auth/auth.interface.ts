export interface AuthConfig {
  baseUrl: string;
  clientId: string;
  clientSecret: string;
}

export interface GetAccessTokenResponse {
  token_type: string;
  expires_in: number;
  access_token: string;
}

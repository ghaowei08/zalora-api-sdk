import { AxiosInstance } from "axios";
import {
  AuthConfig,
  AuthGroupInstance,
  GetAccessTokenResponse,
} from "./auth.interface";
import { Buffer } from "buffer";

export class AuthGroup implements AuthGroupInstance {
  private apiInstance: AxiosInstance;
  private clientId: string;
  private clientSecret: string;

  constructor(config: AuthConfig) {
    this.apiInstance = config.apiInstance;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  async getAccessToken(): Promise<GetAccessTokenResponse> {
    const basicAuth = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString("base64");
    const res = await this.apiInstance({
      url: "/oauth/client-credentials",
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({ grant_type: "client_credentials" }),
    });
    return res.data;
  }
}

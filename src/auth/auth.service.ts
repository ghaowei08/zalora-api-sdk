import axios, { AxiosInstance } from "axios";
import CryptoJS from "crypto-js";
import { AuthConfig, GetAccessTokenResponse } from "./auth.interface";
import { Buffer } from "buffer";

interface AuthGroupInstance {
  getAccessToken: () => Promise<GetAccessTokenResponse>;
}

export class AuthGroup implements AuthGroupInstance {
  private apiInstance: AxiosInstance;
  private clientId: string;
  private clientSecret: string;

  constructor(config: AuthConfig) {
    this.apiInstance = axios.create({
      baseURL: config.baseUrl,
    });
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

import axios, { AxiosInstance } from "axios";
import CryptoJS from "crypto-js";
import { AuthConfig, GetAccessTokenResponse } from "./category.interface";
import { Buffer } from "buffer";

interface CategoryGroupInstance {}

export class CategoryGroup implements CategoryGroupInstance {
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

  private generateUrl(path: string): string {
    const timestamp = Math.floor(Date.now() / 1000);
    const baseString = `${this.partnerId}${path}${timestamp}`;
    const sign = CryptoJS.HmacSHA256(baseString, this.clientSecret).toString(
      CryptoJS.enc.Hex
    );
    const url = `${path}?partner_id=${this.partnerId}&timestamp=${timestamp}&sign=${sign}`;
    return url;
  }
}

import { AxiosInstance, AxiosResponse } from "axios";
import {
  GetSettingResponse,
  SettingConfig,
  SettingGroupInstance,
} from "./setting.interface";

export class SettingGroup implements SettingGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: SettingConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  /**
   * @description The response is the combination of configuration parameters and seller settings. Use this endpoint in case if you are developing some general integration solution with SellerCenter (integration for several sellers, own UI, mobile app). Please, keep in mind that settings and configuration is subject of change: new settings will be added in future, some settings may be removed (usually not used anymore or settings which are the same for all sellers). Values can be null, numeric, string, or array (numeric or string including JSON) depending on what was filled.
   */
  async getSettings(): Promise<GetSettingResponse> {
    const url = `/v2/seller-settings`;
    const method = "GET";
    const res: AxiosResponse<GetSettingResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }
}

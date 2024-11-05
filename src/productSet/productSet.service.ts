import { AxiosInstance, AxiosResponse } from "axios";
import {
  GetProductSetsRequest,
  GetProductSetsResponse,
  ProductSetConfig,
  ProductSetGroupInstance,
} from "./productSet.interface";
import requestToQuery from "../helper/requestToQuery";

export class ProductSetGroup implements ProductSetGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: ProductSetConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  /**
   * @description For given search and filtering criteria return list of ProductSets. Maximum limit is 100 (even if a bigger value is provided).
   */
  async getProductSets(
    req: GetProductSetsRequest
  ): Promise<GetProductSetsResponse> {
    const url = `/v2/product-sets?${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetProductSetsResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }
}

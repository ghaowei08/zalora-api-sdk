import { AxiosInstance, AxiosResponse } from "axios";
import {
  BrandConfig,
  BrandGroupInstance,
  GetBrandByIdRequest,
  GetBrandByIdResponse,
  GetBrandsRequest,
  GetBrandsResponse,
} from "./brand.interface";
import requestToQuery from "../helper/requestToQuery";

export class BrandGroup implements BrandGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: BrandConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  /**
   * @description This endpoint returns the brands based on some filter parameters. The available options are: id, uuid and name. Multiple filters can be used at the same time returning the brands who matched all the filters. The includeInaccessible parameter when passed, all brands are returned, otherwise, only the brands that are available for the current seller are returned
   */
  async getBrands(req: GetBrandsRequest): Promise<GetBrandsResponse> {
    const url = `/v2/brands?${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetBrandsResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }

  /**
   * @description Numeric Id of Brand
   */
  async getBrandById(req: GetBrandByIdRequest): Promise<GetBrandByIdResponse> {
    const url = `/v2/brands/${req.brandId}`;
    const method = "GET";
    const res: AxiosResponse<GetBrandByIdResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }
}

import { AxiosInstance, AxiosResponse } from "axios";
import {
  CreateProductSetRequest,
  CreateProductSetResponse,
  GetProductSetByIdRequest,
  GetProductSetByIdResponse,
  GetProductSetsRequest,
  GetProductSetsResponse,
  ProductSetConfig,
  ProductSetGroupInstance,
  UpdateProductSetByIdRequest,
  UpdateProductSetByIdResponse,
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

  /**
   * @description Use this endpoint to create a product set and at the same time a product.
   */
  async createProductSet(
    req: CreateProductSetRequest
  ): Promise<CreateProductSetResponse> {
    const url = `/v2/product-sets`;
    const method = "POST";
    const res: AxiosResponse<GetProductSetsResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      data: req,
    });
    return res.data;
  }

  /**
   * @description Return common information about single ProductSet. Products in SellerCenter are grouped by ProductSets. ProductSet contains all common information: brand, category, description, etc. Products represent sizes/variations/sellable units/SKU. For example, when you want to sell some shoe with size 36, 38, 40, 42, then ProductSet will contain all basic information common for all sizes like: brand, material, description, country of origin, etc. And each product will represent one size of given shoe. In this example there will 4 products one for each size.
   */
  async getProductSetById(
    req: GetProductSetByIdRequest
  ): Promise<GetProductSetByIdResponse> {
    const url = `/v2/product-set/${req.productSetId}`;
    const method = "GET";
    const res: AxiosResponse<GetProductSetByIdResponse> =
      await this.apiInstance({
        url,
        method,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
    return res.data;
  }

  /**
   * @description Update a product set. You can not update product (variation) level attributes (eg. sellerSku, status, variation, price) here. The endpoint returns the product set after the update operation.
   */
  async updateProductSetById(
    req: UpdateProductSetByIdRequest
  ): Promise<UpdateProductSetByIdResponse> {
    const url = `/v2/product-set/${req.productSetId}`;
    const method = "PUT";
    const res: AxiosResponse<GetProductSetByIdResponse> =
      await this.apiInstance({
        url,
        method,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
        data: req,
      });
    return res.data;
  }
}

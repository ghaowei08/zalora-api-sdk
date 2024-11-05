import { AxiosInstance, AxiosResponse } from "axios";
import {
  CreateProductSetProductRequest,
  CreateProductSetProductResponse,
  GetProductSetProductByIdRequest,
  GetProductSetProductByIdResponse,
  GetProductSetProductsRequest,
  GetProductSetProductsResponse,
  GetProductsRequest,
  GetProductsResponse,
  ProductConfig,
  ProductGroupInstance,
  UpdateProductSetProductByIdRequest,
  UpdateProductSetProductByIdResponse,
  UpdateProductSetProductStatusByIdRequest,
} from "./product.interface";
import requestToQuery from "../helper/requestToQuery";

export class ProductGroup implements ProductGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: ProductConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }
  /**
   * @description This endpoint returns the brands based on some filter parameters. The available options are: id, uuid and name. Multiple filters can be used at the same time returning the brands who matched all the filters. The includeInaccessible parameter when passed, all brands are returned, otherwise, only the brands that are available for the current seller are returned
   */
  async getProducts(req: GetProductsRequest): Promise<GetProductsResponse> {
    const url = `/v2/products?${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetProductsResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }

  /**
   * @description This endpoint returns the brands based on some filter parameters. The available options are: id, uuid and name. Multiple filters can be used at the same time returning the brands who matched all the filters. The includeInaccessible parameter when passed, all brands are returned, otherwise, only the brands that are available for the current seller are returned
   */
  async getProductSetProducts(
    req: GetProductSetProductsRequest
  ): Promise<GetProductSetProductsResponse> {
    const url = `/v2/product-set/${req.productSetId}/products`;
    const method = "GET";
    const res: AxiosResponse<GetProductsResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }

  /**
   * @description The endpoint accepts only 1 product. So if you want to create several products you need to call the endpoint several times.
   */
  async createProductSetProduct(
    req: CreateProductSetProductRequest
  ): Promise<CreateProductSetProductResponse> {
    const url = `/v2/product-set/${req.productSetId}/products`;
    const method = "POST";
    const res: AxiosResponse<CreateProductSetProductResponse> =
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
   * @description Get product by id
   */
  async getProductSetProductById(
    req: GetProductSetProductByIdRequest
  ): Promise<GetProductSetProductByIdResponse> {
    const url = `/v2/product-set/${req.productSetId}/products/${req.productId}`;
    const method = "GET";
    const res: AxiosResponse<GetProductsResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }

  async updateProductSetProductById(
    req: UpdateProductSetProductByIdRequest
  ): Promise<UpdateProductSetProductByIdResponse> {
    const url = `/v2/product-set/${req.productSetId}/products/${req.productId}`;
    const method = "PUT";
    const res: AxiosResponse<UpdateProductSetProductByIdResponse> =
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

  async updateProductSetProductStatusById(
    req: UpdateProductSetProductStatusByIdRequest
  ): Promise<void> {
    const url = `/v2/product-set/${req.productSetId}/products/${req.productId}?status=${req.status}`;
    const method = "PUT";
    await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}

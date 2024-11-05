import { AxiosInstance, AxiosResponse, RawAxiosResponseHeaders } from "axios";
import {
  GetProductSetStocksRequest,
  GetProductSetStocksResponse,
  GetStockByProductIdRequest,
  GetStockByProductIdResponse,
  GetStockByProductSetIdRequest,
  GetStockByProductSetIdResponse,
  ProductStockConfig,
  ProductStockGroupInstance,
  UpdateStockProductsRequest,
  UpdateStockProductsResponse,
} from "./productStock.interface";
import requestToQuery from "../helper/requestToQuery";

export class ProductStockGroup implements ProductStockGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: ProductStockConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  /**
   * @description Internal! Get the list of sum of stocks per product set id. If the product set does not exist the sum of stocks will be 0. You are free to use this endpoint, but in this endpoint there could be breaking changes without notice.
   */
  async getProductSetStocks(
    req: GetProductSetStocksRequest
  ): Promise<GetProductSetStocksResponse> {
    const url = `/v2/product-sets/stocks?${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetProductSetStocksResponse> =
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
   * @description The image may be sent as an URL or a binary file, please note that this endpoint can work with two content types and in documentation you can use dropdown and switch between application/json and multipart/form-data to see how to send request for corresponding content type.
   */
  async updateStockProducts(
    req: UpdateStockProductsRequest
  ): Promise<UpdateStockProductsResponse> {
    const url = `/v2/stock/product`;
    const method = "PUT";
    const res: AxiosResponse<UpdateStockProductsResponse> =
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

  /**
   * @description  Get list of stock for Products based on product set, with consignment and multi-warehouse depending on the configuration
   */
  async getStockByProductSetId(
    req: GetStockByProductSetIdRequest
  ): Promise<GetStockByProductSetIdResponse> {
    const url = `/v2/stock/product-set/${req.productSetId}`;
    const method = "GET";
    const res: AxiosResponse<GetStockByProductSetIdResponse> =
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
   * @description Use the productId of the variation level to get your product stock. To know what is the product id of the variation you can use the endpoint /v2/product-set/{productSetId}/products the id is the productId.
   */
  async getStockByProductId(
    req: GetStockByProductIdRequest
  ): Promise<GetStockByProductIdResponse> {
    const url = `/v2/stock/product/${req.productId}`;
    const method = "GET";
    const res: AxiosResponse<GetStockByProductIdResponse> =
      await this.apiInstance({
        url,
        method,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
    return res.data;
  }
}

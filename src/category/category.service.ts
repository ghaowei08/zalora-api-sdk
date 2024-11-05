import { AxiosInstance, AxiosResponse } from "axios";
import {
  CategoryConfig,
  CategoryGroupInstance,
  GetCategoriesRequest,
  GetCategoriesResponse,
  GetCategoryMappingResponse,
  GetCategoryMostUsedResponse,
} from "./category.interface";
import requestToQuery from "../helper/requestToQuery";

export class CategoryGroup implements CategoryGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: CategoryConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  async getCategories(
    req: GetCategoriesRequest
  ): Promise<GetCategoriesResponse> {
    const url = `/v2/categories?&${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetCategoriesResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }

  /**
   * @description Depending on selected category, available options in some attributes can be limited. For example, there is an attribute "Season" with typical values like "Summer", "Autumn", "Winter" etc. In category "Winter sport clothing" options for attribute "Season" can be limited to only "Winter". If you will try to create or update product set in this category with Season=Summer there will be a validation error. When you request attributes for certain category using "GET /v2/category/{categoryId}/attributes", this mapping is already included. That means when you request "GET /v2/category/{category Id of Winter sport clothing}/attributes" then in available options of attribute "Season" you will see only "Winter".
   */
  async getCategoryMapping(): Promise<GetCategoryMappingResponse> {
    const url = `/v2/category/mappings`;
    const method = "GET";
    const res: AxiosResponse<GetCategoryMappingResponse> =
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
   * @description Return most used categories
   */
  async getCategoryMostUsed(): Promise<GetCategoryMostUsedResponse> {
    const url = `/v2/category/most-used`;
    const method = "GET";
    const res: AxiosResponse<GetCategoryMostUsedResponse> =
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

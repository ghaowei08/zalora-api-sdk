import { AxiosInstance } from "axios";
import { GetBaseRequest, GetBaseResponse } from "../helper/base.interface";

export interface CategoryGroupInstance {
  getCategories: (req: GetCategoriesRequest) => Promise<GetCategoriesResponse>;
  getCategoryMapping: () => Promise<GetCategoryMappingResponse>;
  getCategoryMostUsed: () => Promise<GetCategoryMostUsedResponse>;
}
export interface CategoryConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

interface Category {
  id: number;
  parentId: number;
  name: string;
  attributeSetId: number;
  pathIds: number[];
  path: string;
  childrenIds: number[];
  visible: boolean;
  fulfillmentVisible: false;
  qcDisabled: false;
  serialNumberRequired: false;
  status: "active" | "inactive" | "inherited_inactive" | "deleted";
  uuid: string;
}

export interface GetCategoriesRequest extends GetBaseRequest {
  includeInaccessible: boolean;
}

export interface GetCategoriesResponse extends GetBaseResponse<Category> {}
[];

export interface GetCategoryMappingResponse {
  categoryId: number;
  categoryName: string;
  attributes: { attributeId: number; options: 99 }[];
}
[];
export interface GetCategoryMostUsedResponse extends Category {}

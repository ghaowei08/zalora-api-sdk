import { AxiosInstance } from "axios";
import { GetBaseRequest, GetBaseResponse } from "../helper/base.interface";

export interface ProductSetGroupInstance {
  getProductSets: (
    req: GetProductSetsRequest
  ) => Promise<GetProductSetsResponse>;
  createProductSet: (
    req: CreateProductSetRequest
  ) => Promise<CreateProductSetResponse>;
  getProductSetById: (
    req: GetProductSetByIdRequest
  ) => Promise<GetProductSetByIdResponse>;
  updateProductSetById: (
    req: UpdateProductSetByIdRequest
  ) => Promise<UpdateProductSetByIdResponse>;
}

export interface ProductSetConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

export interface ProductSet {
  id: number;
  uuid: string;
  srcId: string;
  name: string;
  parentSku: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  brandId: number;
  primaryCategoryId: number;
  attributeSetId: number;
  sellerId: number;
  categories: number[];
  attributes: { [key: string]: any };
  sizeSystem: number;
  browseNodes: number[];
  sellerSku: string;
  status: "active" | "inactive" | "deleted";
  sin: string;
}

export interface GetProductSetsRequest extends GetBaseRequest {
  status?:
    | "all"
    | "active"
    | "inactive-all"
    | "deleted-all"
    | "image-missing"
    | "pending"
    | "rejected"
    | "disapproved"
    | "sold-out"
    | "not-authorized";
  keyword?: ("productName" | "productSku" | "sellerSku" | "parentSku")[];
  createDateStart?: string;
  createDateEnd?: string;
  updateDateStart?: string;
  updateDateEnd?: string;
  brandIds?: number[];
  tags?: string[];
  visibility?: "Syncing";
  inStock?: boolean;
  reserved?: boolean;
  categoryIds?: number[];
  onlyWithTags?: boolean;
  parentSku?: string;
  productSetUuids?: string[];
  productSetIds?: number[];
  orderBy?: "createdAt";
  orderDirection?: "asc" | "desc";
}
export interface GetProductSetsResponse extends GetBaseResponse<ProductSet> {}
[];

interface UpsertProductSet {
  name: string;
  price: number;
  status?: "active" | "inactive";
  sellerSku: string;
  parentSku?: string;
  description?: string;
  brandId: number;
  primaryCategoryId: number;
  categories?: number[];
  attributes: { [key: string]: any };
  sizeSystem?: number;
  browseNodes?: number[];
  variation?: string;
  shipmentTypeId?: number;
  productIdentifier?: string;
}
export interface CreateProductSetRequest extends UpsertProductSet {}
export interface CreateProductSetResponse extends GetBaseResponse<ProductSet> {}

export interface GetProductSetByIdRequest {
  productSetId: number;
}
export interface GetProductSetByIdResponse
  extends GetBaseResponse<ProductSet> {}

export interface UpdateProductSetByIdRequest extends UpsertProductSet {
  productSetId: number;
}
export interface UpdateProductSetByIdResponse
  extends GetBaseResponse<ProductSet> {}

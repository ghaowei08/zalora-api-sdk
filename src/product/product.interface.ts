import { AxiosInstance } from "axios";

export interface ProductGroupInstance {
  getProducts: (req: GetProductsRequest) => Promise<GetProductsResponse>;
  getProductSetProducts: (
    req: GetProductSetProductsRequest
  ) => Promise<GetProductSetProductsResponse>;
  getProductSetProductById: (
    req: GetProductSetProductByIdRequest
  ) => Promise<GetProductSetProductByIdResponse>;
  createProductSetProduct: (
    req: CreateProductSetProductRequest
  ) => Promise<CreateProductSetProductResponse>;
  updateProductSetProductById: (
    req: UpdateProductSetProductByIdRequest
  ) => Promise<UpdateProductSetProductByIdResponse>;
  updateProductSetProductStatusById: (
    req: UpdateProductSetProductStatusByIdRequest
  ) => Promise<void>;
}

export interface ProductConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

export interface Product {
  id: number;
  uuid: string;
  srcId: string; // ID of product in Shop system. If empty means that product was not yet syncronized with Shop and is not visible to end customers.
  shopSku: string;
  sellerSku: string;
  sin: string;
  sellerId: number;
  productSetId: number;
  approvalStatus: "pending" | "approved" | "rejected";
  updatedByUserId: number;
  status: "active" | "inactive" | "deleted";
  variation: string;
  taxClassId: number;
  shipmentTypeId: 1 | 2 | 3; // 1 - warehouse; 2 - dropshipping; 3 - crossdocking;
  productIdentifier: string;
  duplicateGroupId: number;
  srcUpdatedAt: string;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface GetProductsRequest {
  productUuids?: string[];
  productIds?: number[];
  sellerId?: number;
  sku?: string;
  name?: string;
  sellerSku?: string;
}
export interface GetProductsResponse extends Product {}
[];

export interface GetProductSetProductsRequest {
  productSetId: number;
}
export interface GetProductSetProductsResponse extends Product {}
[];

interface UpsertProductRequest {
  sellerSku: string;
  status: "active" | "inactive" | "deleted";
  variation: string;
  shipmentTypeId: 1 | 2 | 3; // 1 - warehouse; 2 - dropshipping; 3 - crossdocking
  productIdentifier: string;
  name: string;
}

export interface CreateProductSetProductRequest extends UpsertProductRequest {
  productSetId: number;
}
export interface CreateProductSetProductResponse extends Product {}

export interface GetProductSetProductByIdRequest {
  productSetId: number;
  productId: number;
}
export interface GetProductSetProductByIdResponse extends Product {}

export interface UpdateProductSetProductByIdRequest
  extends UpsertProductRequest {
  productSetId: number;
  productId: number;
}
export interface UpdateProductSetProductByIdResponse extends Product {}

export interface UpdateProductSetProductStatusByIdRequest {
  productSetId: number;
  productId: number;
  status: "active" | "inactive" | "deleted";
}

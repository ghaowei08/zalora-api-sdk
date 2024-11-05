import { AxiosInstance } from "axios";

export interface ProductImageGroupInstance {
  getProductSetImages: (
    req: GetProductSetImagesRequest
  ) => Promise<GetProductSetImagesResponse>;
  createProductSetImages: (
    req: CreateProductSetImageRequest
  ) => Promise<CreateProductSetImageResponse>;
  updateProductSetImages: (
    req: UpdateProductSetImageRequest
  ) => Promise<UpdateProductSetImageResponse>;
  deleteProductSetImages: (req: DeleteProductSetImageRequest) => Promise<void>;
}

export interface ProductImageConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

interface ProductImage {
  id: number;
  srcId: string;
  productSetId: number;
  position: number;
  displayUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductSetImagesRequest {
  productSetId: string;
}
export interface GetProductSetImagesResponse extends ProductImage {}
[];

export interface CreateProductSetImageBaseRequest {
  productSetId: string;
  type: "binary" | "url";
  position: number;
  overwrite: boolean;
}
export interface CreateProductSetImageRequestBinary
  extends CreateProductSetImageBaseRequest {
  type: "binary";
  file: File;
}
export interface CreateProductSetImageRequestUrl
  extends CreateProductSetImageBaseRequest {
  type: "url";
  displayUrl: string;
}
export type CreateProductSetImageRequest =
  | CreateProductSetImageRequestBinary
  | CreateProductSetImageRequestUrl;
export interface CreateProductSetImageResponse extends ProductImage {}

export interface UpdateProductSetImageBaseRequest {
  type: "binary" | "url";
  productSetId: string;
  imageId: string;
  position: number;
}
export interface UpdateProductSetImageRequestBinary
  extends UpdateProductSetImageBaseRequest {
  type: "binary";
  file: File;
}
export interface UpdateProductSetImageRequestUrl
  extends UpdateProductSetImageBaseRequest {
  type: "url";
  displayUrl: string;
}
export type UpdateProductSetImageRequest =
  | UpdateProductSetImageRequestBinary
  | UpdateProductSetImageRequestUrl;

export interface UpdateProductSetImageResponse extends ProductImage {}

export interface DeleteProductSetImageRequest {
  productSetId: string;
  imageId: string;
}

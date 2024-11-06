import { AxiosInstance } from "axios";
import { GetBaseRequest, GetBaseResponse } from "../helper/base.interface";

export interface BrandGroupInstance {
  getBrands: (req: GetBrandsRequest) => Promise<GetBrandsResponse>;
  getBrandById: (req: GetBrandByIdRequest) => Promise<GetBrandByIdResponse>;
}

export interface BrandConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

export interface Brand {
  id: number;
  srcId: string;
  uuid: string;
  name: string;
  status: string;
  isActive: boolean;
  isApproved: boolean;
  isRestricted: boolean;
  countries: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBrandsRequest extends GetBaseRequest {
  name?: string;
  brandIds?: number[];
  brandUUids?: string[];
  includeInaccessible?: boolean;
  restrictedOnly?: boolean;
  sort?: "createdAt" | "updatedAt" | "name";
  sortDir?: "asc" | "desc";
}
export interface GetBrandsResponse extends GetBaseResponse<Brand> {}

export interface GetBrandByIdRequest {
  brandId: number;
}
export interface GetBrandByIdResponse extends Brand {}

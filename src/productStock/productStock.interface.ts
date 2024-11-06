import { AxiosInstance } from "axios";

export interface ProductStockGroupInstance {
  getProductSetStocks: (
    req: GetProductSetStocksRequest
  ) => Promise<GetProductSetStocksResponse>;
  updateStockProducts: (
    req: UpdateStockProductsRequest
  ) => Promise<UpdateStockProductsResponse>;
  getStockByProductSetId: (
    req: GetStockByProductSetIdRequest
  ) => Promise<GetStockByProductSetIdResponse>;
  getStockByProductId: (
    req: GetStockByProductIdRequest
  ) => Promise<GetStockByProductIdResponse>;
}

export interface ProductStockConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

export interface Stock {
  shopSku: string;
  sellerSku: string;
  name: string;
  quantity: number;
  reservedStock: number;
  preVerificationStock: number;
  available: number;
  consignments: {
    received: number;
    quarantined: number;
    defective: number;
    canceled: number;
    returned: number;
    failed: number;
  };
  sellableStock: number;
  nonSellableStock: number;
  warehouses: {
    name: string;
    stock: number;
    warehouseId: number;
  }[];
}

export interface GetProductSetStocksRequest {
  productSetIds: number[];
}
export interface GetProductSetStocksResponse {
  productSetId: number;
  sumOfStocks: number;
  hasProductWithZeroStock: boolean;
  fulfilmentStock: number;
  reservedStock: number;
  sellableStock: number;
  nonSellableStock: number;
  isConsignmentShipment: boolean;
}
[];

interface UpdateProductStock {
  productId: number;
  quantity: number;
}
export interface UpdateStockProductsRequest extends UpdateProductStock {}
[];
export interface UpdateStockProductsResponse extends UpdateProductStock {}
[];

export interface GetStockByProductSetIdRequest {
  productSetId: number;
}
export interface GetStockByProductSetIdResponse extends Stock {}
[];

export interface GetStockByProductIdRequest {
  productId: number;
}
export interface GetStockByProductIdResponse extends Stock {}

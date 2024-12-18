import { Country, Environment, GetBaseUrl } from "./src/config/config.service";
import { AuthGroup } from "./src/auth/auth.service";
import { CategoryGroup } from "./src/category/category.service";
import axios from "axios";
import { SettingGroup } from "./src/setting/setting.service";
import { BrandGroup } from "./src/brand/brand.service";
import { AttributeGroup } from "./src/attribute/attribute.service";
import { ProductGroup } from "./src/product/product.service";
import { ProductSetGroup } from "./src/productSet/productSet.service";
import { ProductImageGroup } from "./src/productImage/productImage.service";
import { ProductStockGroup } from "./src/productStock/productStock.service";

export * from "./src/setting/setting.interface";
export * from "./src/brand/brand.interface";
export * from "./src/attribute/attribute.interface";
export * from "./src/product/product.interface";
export * from "./src/productSet/productSet.interface";
export * from "./src/productImage/productImage.interface";
export * from "./src/productStock/productStock.interface";

export interface ZaloraInstanceConfig {
  country?: Country;
  environment?: Environment;
  clientId: string;
  clientSecret: string;
  accessToken: string;
}

export interface IZaloraInstance {
  auth: AuthGroup;
  attribute: AttributeGroup;
  brand: BrandGroup;
  category: CategoryGroup;
  product: ProductGroup;
  productImage: ProductImageGroup;
  productStock: ProductStockGroup;
  productSet: ProductSetGroup;
  setting: SettingGroup;
}

export class ZaloraInstance implements IZaloraInstance {
  private country: Country = Country.GSC;
  private environment: Environment = Environment.Staging;
  private clientId: string = "";
  private clientSecret: string = "";
  private accessToken: string = "";

  public auth: AuthGroup;
  public attribute: AttributeGroup;
  public brand: BrandGroup;
  public category: CategoryGroup;
  public product: ProductGroup;
  public productImage: ProductImageGroup;
  public productSet: ProductSetGroup;
  public productStock: ProductStockGroup;
  public setting: SettingGroup;

  constructor(config: ZaloraInstanceConfig) {
    if (config.country) {
      this.country = config.country;
    }
    if (config.environment) {
      this.environment = config.environment;
    }
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.accessToken = config.accessToken;

    const baseURL = GetBaseUrl(this.country, this.environment);

    const apiInstance = axios.create({
      baseURL,
    });

    this.auth = new AuthGroup({
      apiInstance,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });

    this.attribute = new AttributeGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.brand = new BrandGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.category = new CategoryGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.product = new ProductGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.productImage = new ProductImageGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.productStock = new ProductStockGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.productSet = new ProductSetGroup({
      apiInstance,
      accessToken: this.accessToken,
    });

    this.setting = new SettingGroup({
      apiInstance,
      accessToken: this.accessToken,
    });
  }
}

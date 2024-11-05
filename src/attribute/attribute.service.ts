import { AxiosInstance, AxiosResponse } from "axios";
import {
  AttributeConfig,
  AttributeGroupInstance,
  GetAttributeByIdRequest,
  GetAttributeByIdResponse,
  GetAttributeSetAttributesRequest,
  GetAttributeSetAttributesResponse,
  GetAttributeSetByIdRequest,
  GetAttributeSetByIdResponse,
  GetAttributeSetsRequest,
  GetAttributeSetsResponse,
  GetAttributesRequest,
  GetAttributesResponse,
} from "./attribute.interface";
import requestToQuery from "../helper/requestToQuery";

export class AttributeGroup implements AttributeGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: AttributeConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  /**
   * @description Fetch data about the available attribute sets. If you want to filter some attribute sets then you can add attributeSetIds[] to the query part of the url.
   */
  async getAttributeSets(
    req: GetAttributeSetsRequest
  ): Promise<GetAttributeSetsResponse> {
    const url = `/v2/attribute-sets?${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetAttributeSetsResponse> = await this.apiInstance(
      {
        url,
        method,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    return res.data;
  }

  /**
   * @description Get the name and the label of the attribute set.
   */
  async getAttributeSetById(
    req: GetAttributeSetByIdRequest
  ): Promise<GetAttributeSetByIdResponse> {
    const url = `/v2/attribute-sets/${req.attributeSetId}`;
    const method = "GET";
    const res: AxiosResponse<GetAttributeSetByIdResponse> =
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
   * @description Get the name and the label of the attribute set.
   */
  async getAttributeSetAttributes(
    req: GetAttributeSetAttributesRequest
  ): Promise<GetAttributeSetAttributesResponse> {
    const url = `/v2/attribute-sets/${req.attributeSetId}/attributes`;
    const method = "GET";
    const res: AxiosResponse<GetAttributeSetAttributesResponse> =
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
   * @description Return list of attributes by using given filters. Maximum limit is 100 even if a higher value is provided. If no attribute ids nor attribute set ids are provided then the global attributes will be listed.
   */
  async getAttributes(
    req: GetAttributesRequest
  ): Promise<GetAttributesResponse> {
    const url = `/v2/attributes?${requestToQuery(req)}`;
    const method = "GET";
    const res: AxiosResponse<GetAttributesResponse> = await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    return res.data;
  }

  /**
   * @description Return list of attributes by using given filters. Maximum limit is 100 even if a higher value is provided. If no attribute ids nor attribute set ids are provided then the global attributes will be listed.
   */
  async getAttributeById(
    req: GetAttributeByIdRequest
  ): Promise<GetAttributeByIdResponse> {
    const url = `/v2/attributes/${req.attributeId}`;
    const method = "GET";
    const res: AxiosResponse<GetAttributeByIdResponse> = await this.apiInstance(
      {
        url,
        method,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    return res.data;
  }
}

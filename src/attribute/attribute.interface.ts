import { AxiosInstance } from "axios";
import { GetBaseRequest, GetBaseResponse } from "../helper/base.interface";

export interface AttributeGroupInstance {
  getAttributeSets: (
    req: GetAttributeSetsRequest
  ) => Promise<GetAttributeSetsResponse>;
  getAttributeSetById: (
    req: GetAttributeSetByIdRequest
  ) => Promise<GetAttributeSetByIdResponse>;
  getAttributeSetAttributes: (
    req: GetAttributeSetAttributesRequest
  ) => Promise<GetAttributeSetAttributesResponse>;
  getAttributes: (req: GetAttributesRequest) => Promise<GetAttributesResponse>;
  getAttributeById: (
    req: GetAttributeByIdRequest
  ) => Promise<GetAttributeByIdResponse>;
}

export interface AttributeConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}

interface AttributeSet {
  id: number;
  name: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

interface Attribute {
  id: number;
  label: string;
  name: string;
  feedName: string;
  groupName: string;
  isMandatory: boolean;
  isGlobalAttribute: boolean;
  description: string;
  productType: string;
  inputType:
    | "checkbox"
    | "datefield"
    | "datetime"
    | "dropdown"
    | "multiselect"
    | "numberfield"
    | "textarea"
    | "textfield";
  attributeType:
    | "value" // it is stored "as-is"
    | "option" // ID of option stored
    | "multi_option" // array or option IDs
    | "system"; // Attribute with those types returned for purposes of making aware about logic of those attributes.
  exampleValue: string;
  maxLength: number;
  isVisibleForHybrid: boolean;
  attributeDefinitionType:
    | "default"
    | "price_status"
    | "price"
    | "special_price"
    | "sale_start"
    | "sale_end";
  attributeDefinitionCountry: "TW" | "SG" | "PH" | "ID" | "MY" | "HK";
  inputMode: "edit" | "display" | "invisible" | "edit_on_create";
  forbidEmpty: boolean;
  options: [
    {
      id: number;
      name: string;
      isDefault: boolean;
    }
  ];
  isEditionBySellerBlocked: boolean; // If set to true then the value of the attribute can not be changed after the product was synced with the shop.
  isUsedInConsignmentFormulas: boolean; // If set to true then the attribute is used in consignment formulas.
}

export interface GetAttributeSetsRequest {
  attributeSetIds?: number[];
}
export interface GetAttributeSetsResponse extends AttributeSet {}
[];

export interface GetAttributeSetByIdRequest {
  attributeSetId: number;
}
export interface GetAttributeSetByIdResponse extends AttributeSet {}

export interface GetAttributeSetAttributesRequest {
  attributeSetId: number;
}
export interface GetAttributeSetAttributesResponse extends Attribute {}
[];

export interface GetAttributesRequest extends GetBaseRequest {
  attributeIds?: number[];
  attributeSetIds?: number[];
  onlyVisible?: boolean;
}
export interface GetAttributesResponse extends GetBaseResponse<Attribute> {}
[];

export interface GetAttributeByIdRequest {
  attributeId: number;
}
export interface GetAttributeByIdResponse extends Attribute {}

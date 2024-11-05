import { AxiosInstance } from "axios";

export interface SettingGroupInstance {
  getSettings: () => Promise<GetSettingResponse>;
}

export interface SettingConfig {
  apiInstance: AxiosInstance;
  accessToken: string;
}
export interface GetSettingResponse {
  allow_invoice_generation: number; // 1 for true, 0 for false
  allow_removal_of_sizes_for_hybrid_product_set: number; // 1 for true, 0 for false
  allow_seller_change_preselected_shipping_provider: number; // 1 for true, 0 for false
  allow_shipping_label_generation: number; // 1 for true, 0 for false
  all_products_in_product_set_have_same_price: number; // 1 for true, 0 for false
  available_languages: {
    id_language: string;
    code: string;
    name: string;
    active: string; // "1" for true, "0" for false
  }[];
  commissions_fees_visibility: number[]; // List of commission IDs
  consignment_request_delivery_type: number; // Numeric value for consignment type
  consignment_return_request_delivery_type: number; // Numeric value for consignment return type
  display_paid_price: number; // 1 for true, 0 for false
  display_product_total: number; // 1 for true, 0 for false
  display_vat_on_payout_overview: number; // 1 for true, 0 for false
  display_wht_on_payout_overview: number; // 1 for true, 0 for false
  dropdown_options_sort_order: number; // Sort order type as a number
  enable_additional_browse_nodes: number; // 1 for true, 0 for false
  enable_additional_categories_display: number; // 1 for true, 0 for false
  enable_display_customer_email: number; // 1 for true, 0 for false
  enable_display_customer_phone_num: number; // 1 for true, 0 for false
  enable_display_last_mile_shipping_provider: number; // 1 for true, 0 for false
  enable_inventory_report: number; // 1 for true, 0 for false
  enable_mandatory_product_images: number; // 1 for true, 0 for false
  enable_master_product_export: number; // 1 for true, 0 for false
  enable_multi_warehouse: number; // 1 for true, 0 for false
  enable_operations_report: number; // 1 for true, 0 for false
  enable_product_groups: number; // 1 for true, 0 for false
  enable_promotions_report: number; // 1 for true, 0 for false
  enable_redirect_external_analytics_platform: number; // 1 for true, 0 for false
  enable_returns_from_warehouse: number; // 1, 0, or 2 for different states
  enable_sales_order_documents: number; // 1 for true, 0 for false
  enable_sales_report: number; // 1 for true, 0 for false
  enable_seller_promotions: number; // 1 for true, 0 for false
  enable_size_refill: number; // 1 for true, 0 for false
  enable_skipping_images_hybrid_products: number; // 1 for true, 0 for false
  fk_shipping_type: number; // Foreign key for shipping type
  fulfillment_by_venture: number; // 1 for true, 0 for false
  images_management_ui_access: number; // Access type as a number
  image_max_height: number; // Max height for images in pixels
  image_max_width: number; // Max width for images in pixels
  image_min_height: number; // Min height for images in pixels
  image_min_width: number; // Min width for images in pixels
  link_to_new_product_module_enabled: number; // 1 for true, 0 for false
  mandatory_invoice_access_key: number; // 1 for true, 0 for false
  manifest_dropshipping_enabled: number; // 1 for true, 0 for false
  manifest_enabled: number; // 1 for true, 0 for false
  non_editable_attributes_edition_allowed: number; // 1 for true, 0 for false
  "order:ui_access": number; // UI access type as a number
  order_allow_cancellation_in_ready_to_ship: number; // 1 for true, 0 for false
  order_invoice_access_key_enabled: number; // 1 for true, 0 for false
  "product:ui_access": number; // UI access type as a number
  product_creation_template_type: number; // Template type as a number
  product_default_shipment_type: number; // Shipment type as a number
  product_form_available_properties: string[]; // Array of country codes
  product_sales_price_date_hour_toggle: number; // 1 for true, 0 for false
  product_text_editor: number; // 1 for true, 0 for false
  promise_shipping_time: string; // e.g., "shipping_speed"
  tax_invoice_template: number; // Template ID
  enable_traffic_report: number; // 1 for true, 0 for false
  "catalog:attribute/groupname_order": string; // Group names as a comma-separated string
  "core:shop/name": string; // Shop name
  "core:shop/url": string; // Shop URL
  "core:order/blocked_states": string; // e.g., "return_rejected"
  "core:category/min_level": string; // Minimum category level as a string
  "core:product/display_shop_link": string; // 1 for true, 0 for false
  "core:api/explorer/api_url": string; // API URL
  "product:without_images/feature_switch/enabled": string; // "1" for true, "0" for false
  "core:allow_empty_price_product/enabled": string; // "1" for true, "0" for false
  "core:faq_help_link/enabled": string; // "1" for true, "0" for false
  "product:decimal_prices_handling/enabled": string; // "1" for true, "0" for false
  "core:faq_help_link/external_link": string; // External link URL
  "core:help_link/getting_started_link": string; // Getting started link URL
  "core:transactions/include_wht_in_amount": string; // "1" for true, "0" for false
  "core:product/combined_rejected_list/enabled": string; // "1" for true, "0" for false
  "core:order/bulk_status_to_shipped/enabled": string; // "1" for true, "0" for false
  "core:order/bulk_status_to_delivered/enabled": string; // "1" for true, "0" for false
  "core:seller_help_desk/enabled": string; // "1" for true, "0" for false
  "core:brand/scale_mapping/enabled": string; // "1" for true, "0" for false
  "core:brand/scale_mapping/attribute": string; // Attribute as a string
  "core:consignment/consignment_only_product/enabled": string; // "1" for true, "0" for false
  "core:pickup_request/enabled": string; // "1" for true, "0" for false
  "core:content_score/enabled": string; // "1" for true, "0" for false
  "product:browse_nodes/amount": string; // Amount as a string
  "core:price_update_csv": string; // "1" for true, "0" for false
  "core:seller/multi_warehouse/enabled": string; // "1" for true, "0" for false
  "core:product/allow_shipment_type_change/enabled": string; // "1" for true, "0" for false
  "product:hybrid_depth_search/enabled": string; // "1" for true, "0" for false
  "product:shop_search_url": string; // Shop search URL
  "product:new_ui_cut_date": string; // New UI cut date as a string
  "order:show_installment_fee/enabled": string; // "1" for true, "0" for false
  "core:multiple/account_statement/enabled": string; // "1" for true, "0" for false
  ui_access: number; // UI access type as a number
  "attribute/groupname_order": string; // Attribute group names as a comma-separated string
  "shop/name": string; // Shop name
  "shop/url": string; // Shop URL
  "order/blocked_states": string; // Blocked states as a string
  "category/min_level": string; // Minimum level as a string
  "product/display_shop_link": string; // "1" for true, "0" for false
  "api/explorer/api_url": string; // API URL
  "without_images/feature_switch/enabled": string; // "1" for true, "0" for false
  "allow_empty_price_product/enabled": string; // "1" for true, "0" for false
  "faq_help_link/enabled": string; // "1" for true, "0" for false
  "decimal_prices_handling/enabled": string; // "1" for true, "0" for false
  "faq_help_link/external_link": string; // External link URL
  "help_link/getting_started_link": string; // Getting started link URL
  "transactions/include_wht_in_amount": string; // "1" for true, "0" for false
  "product/combined_rejected_list/enabled": string; // "1" for true, "0" for false
  "order/bulk_status_to_shipped/enabled": string; // "1" for true, "0" for false
  "order/bulk_status_to_delivered/enabled": string; // "1" for true, "0" for false
  "seller_help_desk/enabled": string; // "1" for true, "0" for false
  "brand/scale_mapping/enabled": string; // "1" for true, "0" for false
  "brand/scale_mapping/attribute": string; // Attribute as a string
  "consignment/consignment_only_product/enabled": string; // "1" for true, "0" for false
  "pickup_request/enabled": string; // "1" for true, "0" for false
  "content_score/enabled": string; // "1" for true, "0" for false
  "browse_nodes/amount": string; // Amount as a string
  price_update_csv: string; // "1" for true, "0" for false
  "seller/multi_warehouse/enabled": string; // "1" for true, "0" for false
  "product/allow_shipment_type_change/enabled": string; // "1" for true, "0" for false
  "hybrid_depth_search/enabled": string; // "1" for true, "0" for false
  shop_search_url: string; // Shop search URL
  new_ui_cut_date: string; // New UI cut date as a string
  "show_installment_fee/enabled": string; // "1" for true, "0" for false
  "multiple/account_statement/enabled": string; // "1" for true, "0" for false
}

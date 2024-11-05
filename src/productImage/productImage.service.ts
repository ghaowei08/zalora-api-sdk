import { AxiosInstance, AxiosResponse, RawAxiosResponseHeaders } from "axios";
import {
  CreateProductSetImageRequest,
  CreateProductSetImageResponse,
  DeleteProductSetImageRequest,
  GetProductSetImagesRequest,
  GetProductSetImagesResponse,
  ProductImageConfig,
  ProductImageGroupInstance,
  UpdateProductSetImageRequest,
  UpdateProductSetImageResponse,
} from "./productImage.interface";

export class ProductImageGroup implements ProductImageGroupInstance {
  private apiInstance: AxiosInstance;
  private accessToken: string;

  constructor(config: ProductImageConfig) {
    this.apiInstance = config.apiInstance;
    this.accessToken = config.accessToken;
  }

  /**
   * @description Only active (not-deleted) images are included. Please, do not use public URLs of images to serve content. Empty array can be returned if product set has no images. All images are returned (without pagination). Sorting images is based on position of images. You can create 1 image per request
   */
  async getProductSetImages(
    req: GetProductSetImagesRequest
  ): Promise<GetProductSetImagesResponse> {
    const url = `/v2/product-set/${req.productSetId}/images`;
    const method = "GET";
    const res: AxiosResponse<GetProductSetImagesResponse> =
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
   * @description The image may be sent as an URL or a binary file, please note that this endpoint can work with two content types and in documentation you can use dropdown and switch between application/json and multipart/form-data to see how to send request for corresponding content type.
   */
  async createProductSetImages(
    req: CreateProductSetImageRequest
  ): Promise<CreateProductSetImageResponse> {
    const url = `/v2/product-set/${req.productSetId}/images`;
    const method = "POST";
    let headers: RawAxiosResponseHeaders = {
      Authorization: `Bearer ${this.accessToken}`,
    };
    let res: AxiosResponse<GetProductSetImagesResponse>;
    if (req.type === "binary") {
      // Handle multipart/form-data for binary file upload
      const formData = new FormData();
      formData.append("file", req.file);
      formData.append("position", req.position.toString());
      formData.append("overwrite", req.overwrite.toString());

      headers = {
        ...headers,
        "Content-Type": "multipart/form-data",
      };

      res = await this.apiInstance({
        url,
        method,
        headers,
        data: formData,
      });
    } else {
      headers = {
        ...headers,
        "Content-Type": "application/json",
      };
      const data = {
        displayUrl: req.displayUrl,
        position: req.position,
        overwrite: req.overwrite,
      };

      res = await this.apiInstance({
        url,
        method,
        headers,
        data,
      });
    }

    return res.data;
  }

  /**
   * @description The product set can have 2 images with the same position. When we update some image position to position 1 then this image should be marked as main. When we update position of image with current position 1, then another image (if any) with position 1 should be marked as main otherwise the image remain main.
   */
  async updateProductSetImages(
    req: UpdateProductSetImageRequest
  ): Promise<UpdateProductSetImageResponse> {
    const url = `/v2/product-set/${req.productSetId}/images/${req.imageId}`;
    const method = "PATCH";
    let headers: RawAxiosResponseHeaders = {
      Authorization: `Bearer ${this.accessToken}`,
    };
    let res: AxiosResponse<GetProductSetImagesResponse>;
    if (req.type === "binary") {
      // Handle multipart/form-data for binary file upload
      const formData = new FormData();
      formData.append("file", req.file);
      formData.append("position", req.position.toString());

      headers = {
        ...headers,
        "Content-Type": "multipart/form-data",
      };

      res = await this.apiInstance({
        url,
        method,
        headers,
        data: formData,
      });
    } else {
      headers = {
        ...headers,
        "Content-Type": "application/json",
      };
      const data = {
        displayUrl: req.displayUrl,
        position: req.position,
      };
      res = await this.apiInstance({
        url,
        method,
        headers,
        data,
      });
    }

    return res.data;
  }

  /**
   * @description When we remove image with current position 1 and main, then another image (if any) with position 1 should be marked as main. If no such image exists, a different image will be selected at random to become the new main image. The removal of images does not trigger a reindexing of the remaining images.
   */
  async deleteProductSetImages(
    req: DeleteProductSetImageRequest
  ): Promise<void> {
    const url = `/v2/product-set/${req.productSetId}/images/${req.imageId}`;
    const method = "DELETE";
    await this.apiInstance({
      url,
      method,
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }
}

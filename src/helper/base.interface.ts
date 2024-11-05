export interface GetBaseRequest {
  limit: number;
  offset: number;
}

export interface GetBaseResponse<T> {
  items: T[];
  pagination: {
    limit: number;
    offset: number;
    totalCount: number;
  };
}

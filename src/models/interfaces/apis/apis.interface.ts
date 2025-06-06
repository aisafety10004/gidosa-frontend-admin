
export interface ServerApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface ApiResponse<T> extends Promise<ServerApiResponse<T>> {}


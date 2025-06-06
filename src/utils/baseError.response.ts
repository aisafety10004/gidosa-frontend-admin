export interface IBaseErrorResponse {
  response: {
    data: {
      status: number;
      message: string;
    };
  };
}

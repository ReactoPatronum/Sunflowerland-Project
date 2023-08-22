export type ApiResponse<T> = {
  data: T;
  isSuccess: boolean;
  message: string;
};

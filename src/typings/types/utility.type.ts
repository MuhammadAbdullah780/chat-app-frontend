export type Maybe<T> = T | null;
export type TODO = any;

// Success Response Type
export type SuccessType<T = {}> = {
  data: T;
  isSuccess?: boolean;
  message?: string;
};
// Error Response Type
export type ErrorType = {
  axiosError: string | undefined;
  error: string | undefined;
};

import axiosApi from "@/config/axios";
import { ErrorType, SuccessType } from "@/typings/types/utility.type";
import { useSession } from "next-auth/react";

// Request Method Types
type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

// Arguement For Create Request func
type Payload = {
  endpoint: string;
  method: Method;
  body?: any;
  params?: any;
};

/**
 * @desc Axois Create Request Utility Function
 */
export const createRequest = <T extends {} = any>({
  endpoint,
  method,
  body,
  params,
}: Payload): Promise<SuccessType<T> | ErrorType> => {
  return new Promise(async (res, rej) => {
    const session = useSession();

    try {
      const { data } = await axiosApi({
        headers: {
          authorization: `Bearer ${""}`,
        },
        data: body,
        url: endpoint,
        method,
        params,
      });
      res(data);
    } catch (error: any) {
      const myError: ErrorType = {
        axiosError: error?.message || undefined,
        error: error?.response?.data?.message || undefined,
      };
      console.log("catch");
      console.log({ error });
      rej(myError);
    }
  });
};

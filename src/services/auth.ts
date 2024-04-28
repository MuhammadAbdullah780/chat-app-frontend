import Paths from "@/config/path";
import { ErrorType } from "@/typings/types/utility.type";
import { createRequest } from "@/utils/helpers";

type LoginArgs = {
  email: string;
  password: string;
};

export class AuthApi {
  // Properties
  private readonly loginEndpoint: string = Paths.LOGIN;
  private readonly signUpEndpoint: string = Paths.SIGN_UP;

  async login(args: LoginArgs) {
    try {
      const res = await createRequest({
        endpoint: this.loginEndpoint,
        method: "POST",
        body: args,
      });
      return res;
    } catch (err) {
      const { error, axiosError } = err as ErrorType;
      throw new Error(error || (axiosError as string));
    }
  }

  async signUp() {}

  async generateRefereshToken() {}
}

export default new AuthApi();

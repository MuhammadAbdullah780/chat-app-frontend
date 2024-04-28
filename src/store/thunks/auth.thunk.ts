import { AuthApi } from "@/services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export class AuthThunk {
  static LOGIN() {
    return () => {
      createAsyncThunk(
        "api/login",
        async (_, { fulfillWithValue, rejectWithValue }) => {
          try {
            const res = await new AuthApi().login({
              password: "hello123",
              email: "hello@gmail.com",
            });

            fulfillWithValue(res);
          } catch (err) {
            rejectWithValue(err as string);
          }
        },
      );
    };
  }
}

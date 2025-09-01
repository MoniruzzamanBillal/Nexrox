import { baseApi } from "@/redux/api/baseApi";

const authAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for login
    logIn: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),

    // ! for sign  up
    signUp: builder.mutation({
      query: (payload) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: payload,
        };
      },
    }),

    //
  }),
});

//
export const { useLogInMutation, useSignUpMutation } = authAPi;

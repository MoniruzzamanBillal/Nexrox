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

    //
  }),
});

//
export const { useLogInMutation } = authAPi;

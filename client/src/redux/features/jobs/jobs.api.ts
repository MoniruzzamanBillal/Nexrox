import { baseApi } from "@/redux/api/baseApi";

const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ! for getting all jobs
    getAllJobs: builder.query({
      query: () => {
        return {
          url: "/jobs",
          method: "GET",
        };
      },
    }),

    //
  }),
});

//
export const { useGetAllJobsQuery } = jobsApi;

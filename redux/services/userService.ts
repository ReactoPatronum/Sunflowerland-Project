import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "@/lib/config";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  //for Automated Re-fetching
  tagTypes: ["Users"],
  endpoints(builder) {
    return {
      getAllUsers: builder.query({
        query: () => {
          return {
            url: `user/getAll`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useGetAllUsersQuery } = userService;

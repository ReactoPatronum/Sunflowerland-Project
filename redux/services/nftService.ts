import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "@/lib/config";

export const nftService = createApi({
  reducerPath: "nftService",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints(builder) {
    return {
      createNft: builder.mutation({
        query: (args) => ({
          url: "nft/create",
          method: "POST",
          body: args,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }),
      }),
      getAllNftData: builder.query({
        query: () => {
          return {
            url: `nft/getAll`,
            method: "GET",
          };
        },
      }),
      deleteNft: builder.mutation({
        query: (args) => {
          return {
            url: `nft/${args}`,
            method: "DELETE",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          };
        },
      }),
    };
  },
});

export const {
  useCreateNftMutation,
  useGetAllNftDataQuery,
  useDeleteNftMutation,
} = nftService;

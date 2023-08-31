import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "@/lib/config";
import { ApiResponse } from "@/types/typing";
import { Nft } from "@prisma/client";

export const nftService = createApi({
  reducerPath: "nftService",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  //for Automated Re-fetching
  tagTypes: ["Nfts"],
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
        transformResponse: (response: ApiResponse<Nft[]>) => {
          const data = response.data;

          const sortedData = data.sort(
            (a: any, b: any) => b.createdAt.localeCompare(a.createdAt) // sortedBy createdAt
          );
          response.data = sortedData;
          return response;
        },
        providesTags: ["Nfts"],
        //keepUnusedDataFor: 30, caching time.
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
        invalidatesTags: ["Nfts"],
      }),
      getNft: builder.query({
        query: (args) => {
          return {
            url: `nft/${args}`,
            method: "GET",
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
  useGetNftQuery,
} = nftService;

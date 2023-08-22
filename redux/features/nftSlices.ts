import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nft } from "@prisma/client";
import { nftService } from "../services/nftService";

const initialState: Nft[] = [];

const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    setNFTs: (state, action: PayloadAction<Nft[]>) => {
      return action.payload;
    },
    addNFT: (state, action: PayloadAction<Nft>) => {
      const nft = action.payload;
      return [...state, nft];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      nftService.endpoints.getAllNftData.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export const { setNFTs, addNFT } = nftsSlice.actions;

export default nftsSlice.reducer;

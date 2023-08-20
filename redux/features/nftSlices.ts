import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nft } from "@prisma/client";

const initialState: Nft[] = [];

const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    setNFTs: (state, action: PayloadAction<Nft[]>) => {
      state = action.payload;
    },
    addNFT: (state, action: PayloadAction<Nft>) => {
      state.push(action.payload);
    },
  },
});

export const { setNFTs, addNFT } = nftsSlice.actions;

export default nftsSlice.reducer;

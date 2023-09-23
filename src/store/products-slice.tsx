import { createSlice } from "@reduxjs/toolkit";

import { navDataType, storeDataType } from "../types";
import { storeData } from "../lib/data";

export type ProductsStateType = {
  productPage: navDataType;
  productDetail?: storeDataType;
  storeProducts: storeDataType[];
  favorites: boolean[];
};

const initState: ProductsStateType = {
  productPage: "Home",
  storeProducts: [...storeData],
  favorites: new Array(storeData.length).fill(false),
};

const productsSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
    toggleFavorites(state, action) {
      const { payload: key } = action;
      state.favorites[key] = !state.favorites[key];
    },
    routePage(state, action) {
      const { page, product } = action.payload;
      state.productPage = page;
      if (page === "Saved") {
        state.storeProducts = storeData.filter(
          (_item, index) => state.favorites[index]
        );
      }
      if (page === "Home") {
        state.storeProducts = [...storeData];
      }
      if (page === "Detail") {
        state.productDetail = product;
      }
    },
  },
});

export const { toggleFavorites, routePage } = productsSlice.actions;

export default productsSlice.reducer;

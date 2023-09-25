import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { navDataType, storeDataType } from "../types";
import { storeData } from "../lib/data";
import { RootState } from ".";

// Mainly for providing two functionalities:
//  -> Page Routing
//  -> toggling products between favorite and non-favorite 

export type ProductsStateType = {
  productPage: navDataType;
  productDetail?: storeDataType;
  favorites: boolean[];
};

export type RoutePageActionType = {
  page:navDataType, product?:storeDataType
}

const initState: ProductsStateType = {
  productPage: "Home",
  favorites: new Array(storeData.length).fill(false),
};

const productsSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
    toggleFavorites(state, action: PayloadAction<number>) {
      const { payload: key } = action;
      state.favorites[key] = !state.favorites[key];
    },
    routePage(state, action: PayloadAction<RoutePageActionType>) {
      const { page, product } = action.payload;
      state.productPage = page;
      if (page === "Detail") {
        state.productDetail = product;
      }
    },
  },
});


export const { toggleFavorites, routePage } = productsSlice.actions;


export const selectAllProducts = (state: RootState) => state.products

export default productsSlice.reducer;

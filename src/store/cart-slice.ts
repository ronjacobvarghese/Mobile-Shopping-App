import { createSlice } from "@reduxjs/toolkit";
import { CartProductType } from "../types";

type InitStateType = {
  cart: CartProductType[];
  totalPrice: number;
};

const initState: InitStateType = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initState,
  reducers: {
    addCartProduct(state, action) {
      const { payload: cartItem } = action;
      // two cases: cart contains item or item does not exist in cart

      const existingCartItem = state.cart.find(
        (item) =>
          item.product.title === cartItem.product.title &&
          item.size === cartItem.size
      );

      if (existingCartItem) {
        // filter existing cart to remove the updated product
        // Add +1 quantity to updated product
        // update the state

        const filteredCartProducts = state.cart.filter(
          (item) =>
            item.product.title +item.size !== existingCartItem.product.title +existingCartItem.size 
        );

        existingCartItem.quantity += 1;

        state.cart = [...filteredCartProducts, existingCartItem];
      } else {
        let newCartProduct: CartProductType = {
          product: {
            title: cartItem.product.title,
            price: cartItem.product.price,
            imageUrl: cartItem.product.imageUrl,
          },
          size: cartItem.size,
          quantity: 1,
        };

        state.cart = [...state.cart, newCartProduct];
      }
    },
    reduceCartQty(state,action) {
      
    }
  },
});

export const { addCartProduct } = cartSlice.actions;

export default cartSlice.reducer;

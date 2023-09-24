import { createSlice } from "@reduxjs/toolkit";
import { CartProductType } from "../types";

//redux cart slice handles all cart operations
//includes add cart product from product details as well as in the cart
// reducing items one by one in the cart as well as removing the product as a whole.

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
      const  cartItem:CartProductType = action.payload;
      // two cases: cart contains item or item does not exist in cart

      const existingCartItem = state.cart.find(
        (item) =>
          item.product.title === cartItem.product.title &&
          item.size === cartItem.size
      );

      if (existingCartItem) {
        // filter existing cart to remove the updated product
        // Add +1 quantity to updated product
        // update the total price
        // update the cart state

  
        const filteredCartProducts = state.cart.filter(
          (item) =>
            item.product.title +item.size !== existingCartItem.product.title +existingCartItem.size 
        );

        existingCartItem.quantity += 1;

        state.totalPrice += existingCartItem.product.price;
        state.cart = [...filteredCartProducts, existingCartItem];
      } else {
        //create a brand new product,
        //assign quantity
        // update the total price as well as cart state

        let newCartProduct: CartProductType = {
          product:cartItem.product,
          size: cartItem.size,
          quantity: 1,
        };
        
        state.totalPrice += cartItem.product.price;
        state.cart = [...state.cart, newCartProduct];
      }
    },
    reduceCartQty(state,action) {
        const key = action.payload;
        state.cart[key].quantity -=1;
        state.totalPrice -=state.cart[key].product.price;
    },
    deleteCartProduct(state,action) {
      const { key, price, quantity,  size } = action.payload;
      state.cart = state.cart.filter(item => item.product.key+item.size !== key+size);
      state.totalPrice -= price*quantity
    }
  },
});

export const { addCartProduct, reduceCartQty, deleteCartProduct } = cartSlice.actions;

export default cartSlice.reducer;

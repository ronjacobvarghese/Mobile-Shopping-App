import React, { createContext, useReducer, useContext } from "react";
import { navDataType, storeDataType, CartProductType } from "../types";
import { storeData } from "../lib/data";

// The Context API is mainly for providing three functionalities:
//  -> Page Routing
//  -> differentiate between favorite and non-favorite products
//   -> enabling filtering while toggling between favoritePage and dashboard Page
//   -> managing the cart products
//   -> updating total price on adding products

type ProductsContextType = {
  productPage: navDataType;
  storeProducts: storeDataType[];
  favorites: boolean[];
  cart: CartProductType[];
  totalPrice: number;
  onToggleFavorite: (index: number) => void;
  onAddToCart: (cartProduct: CartProductType) => void;
  onRouteToPage: (page: navDataType) => void;
};

const ProductsContext = createContext<ProductsContextType | null>(null);

type InitStateType = {
  productPage: navDataType;
  storeProducts: storeDataType[];
  favorites: boolean[];
  cart: CartProductType[];
  totalPrice: number;
};
const initState: InitStateType = {
  productPage: "Home",
  storeProducts: [...storeData],
  favorites: new Array(storeData.length).fill(false),
  cart: [],
  totalPrice: 0,
};

enum REDUCER_ACTION_TYPE {
  ADD_CART,
  TOGGLE_FAV,
  ROUTE_PAGE,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

const reducer = (
  state: InitStateType,
  action: ReducerAction
): InitStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_CART:
      const { payload: cartItem } = action;

      // two cases: cart contains item or item does not exist in cart

      const existingCartItem = state.cart.find(
        (item) => item.product.title === cartItem.title
      );

      if (existingCartItem) {
        // filter existing cart to remove the updated product
        // Add +1 quantity to updated product
        // update the state

        const filteredCartProducts = state.cart.filter(
          (item) => item.product.title !== existingCartItem.product.title
        );

        existingCartItem.quantity += 1;

        return {
          ...state,
          cart: [...filteredCartProducts, existingCartItem],
        };
      }

      let newCartProduct: CartProductType = {
        product: {
          title: cartItem.product.title,
          price: cartItem.product.price,
          imageUrl: cartItem.product.imageUrl,
        },
        size: cartItem.size,
        quantity: 1,
      };

      return {
        ...state,
        cart: [...state.cart, newCartProduct],
      };
    case REDUCER_ACTION_TYPE.TOGGLE_FAV:
      const { payload: index } = action;
      const updatedFavorites = [...state.favorites];
      updatedFavorites[index] = !updatedFavorites[index];
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case REDUCER_ACTION_TYPE.ROUTE_PAGE:
      const { payload: page } = action;
      //three possible pages: store, favorites, cart
      //if favorite filter through store data to update store products for only favorites
      if (page === "Saved") {
        let updatedStoreProducts = storeData.filter(
          (_item, index) => state.favorites[index]
        );
        return {
          ...state,
          productPage: "Saved",
          storeProducts: updatedStoreProducts,
        };
      }
      if (page === "Cart") {
        return {
          ...state,
          productPage: "Cart",
        };
      }
      if (page === "Home") {
        return {
          ...state,
          productPage: "Home",
          storeProducts: [...storeData],
        };
      }
      return {
        ...state,
        productPage: "Detail",
      };
    default:
      throw new Error("Invalid Product Action");
  }
};

type ProductsContextProviderProps = { children: React.ReactElement };

export default function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  // Used useReducer for handling multiple states and actions based on the  favorites and carts

  const [products, dispatch] = useReducer(reducer, initState);

  return (
    <ProductsContext.Provider
      value={{
        ...products,
        onToggleFavorite: (index: number) =>
          dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_FAV, payload: index }),
        onAddToCart: (cartProduct) => {
          dispatch({
            type: REDUCER_ACTION_TYPE.ADD_CART,
            payload: cartProduct,
          });
        },
        onRouteToPage: (page) =>
          dispatch({ type: REDUCER_ACTION_TYPE.ROUTE_PAGE, payload: page }),
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  const productCtx = useContext(ProductsContext);

  if (!productCtx) {
    throw Error(
      "useProductContext must be used within ProductsContextProvider"
    );
  }

  return productCtx;
};

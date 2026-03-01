// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// Utility function to create the Redux store
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveCartState = (state: import("../types/CartItem").CartItemState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch {
    // Ignore write errors
  }
};

const preloadedState = {
  cart: loadCartState(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer, // The key 'cart' determines the state slice
    product: productReducer, // The key 'product' determines the state slice
  },
  preloadedState,
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

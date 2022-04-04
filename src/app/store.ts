import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    priducts: productReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

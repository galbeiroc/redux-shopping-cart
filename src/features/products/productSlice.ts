import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProductState {
  products: {
    [id: string]: Product
  }
};

const initialState: ProductState = {
  products: {}
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
});

export default productSlice.reducer;

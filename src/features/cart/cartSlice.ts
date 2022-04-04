import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
  items: {
    [productID: string]: number
  }
}

const initialState: CartState = {
  items: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    }
  }
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;

export function getNumberItems(state: RootState) {
  let numItems = 0;
  for (let id in state.cart.items) {
    console.log(id);
    numItems += state.cart.items[id]
  }

  return numItems;
}

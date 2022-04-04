import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  console.log('number items');
  for (let id in state.cart.items) {
    numItems += state.cart.items[id]
  }

  return numItems;
};

export const getMemoizedNumberItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    let numItems = 0;
    console.log('number items memoized');
    for (let id in items) {
      numItems += items[id]
    }
    return numItems;
  }
);

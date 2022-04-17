import cartReducer, { CartState, addCart, removeFromCart, updateQuantity } from "./cartSlice";

describe('cart reducer', () => {
  test("an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: 'READY',
      errorMessage: '',
      items: {}
    });
  });
  test("add to cart", () => {
    const initialState = undefined;
    const action = addCart('abc');
    let state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: 'READY',
      errorMessage: '',
      items: { abc: 1 }
    });
    state = cartReducer(state, action);
    state = cartReducer(state, action);
    expect(state).toEqual({
      checkoutState: 'READY',
      errorMessage: '',
      items: { abc: 3 }
    });
  });
  test("remove from cart", () => {
    const initialState: CartState = {
      checkoutState: 'READY',
      errorMessage: '',
      items: { abc: 1, def: 3 }
    };
    const action = removeFromCart('abc');
    let state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: 'READY',
      errorMessage: '',
      items: { def: 3 }
    });
  });
  test("updating quantity", () => {
    const initialState: CartState = {
      checkoutState: 'READY',
      errorMessage: '',
      items: { abc: 1, def: 3 }
    };
    const action = updateQuantity({ id: 'def', quantity: 5 });
    let state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: 'READY',
      errorMessage: '',
      items: { abc: 1, def: 5 }
    });
  });
})
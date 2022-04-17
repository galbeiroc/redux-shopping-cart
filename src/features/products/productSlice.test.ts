import productsReducer, { receivedProducts } from "./productSlice";

describe('products reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = productsReducer(initialState, action);
    expect(result).toEqual({ products: {} });
  });
});

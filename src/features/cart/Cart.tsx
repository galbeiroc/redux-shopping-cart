import React from "react";
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Cart.module.css";
import { getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";

export function Cart() {
  const products = useAppSelector(state => state.products.products);
  const items = useAppSelector(state => state.cart.items);
  const total = useAppSelector(getTotalPrice);
  const checkoutState = useAppSelector(state => state.cart.checkoutState);
  const dispatch = useAppDispatch();

  const onChangeBlur = (e: React.FocusEvent<HTMLInputElement>, id: string): void => {
    const quantity = Number(e.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }))
  }

  const tableClasses = classNames({
    [styles.table]: true,
    [styles.checkoutError]: checkoutState === 'ERROR',
    [styles.checkoutLoading]: checkoutState === 'LOADING'
  })

  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={tableClasses}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(items).map(([id, quantity]) => (
              <tr key={products[id].id}>
                <td>{products[id].name}</td>
                <td>
                  <input
                    type="text"
                    className={styles.input}
                    defaultValue={quantity}
                    onBlur={(e) => onChangeBlur(e, products[id].id)}
                  />
                </td>
                <td>{products[id].price}</td>
                <td>
                  <button onClick={() => dispatch(removeFromCart(products[id].id))} aria-label={`Remove ${products[id].name} from Shopping Cart`}>
                    X
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${total}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form>
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}

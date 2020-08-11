import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  // console.log(cart);

  return (
    <div>
      <span>Items in Cart : {cart.length}</span>
      <br />
      <span>Total price : {totalPrice}</span>
      <br />
      {cart.map((item) => (
        <div>
          <h3>Cart</h3>
          <h6>
            {item.name} : ${item.price}
          </h6>
        </div>
      ))}
    </div>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd';
import { CartContext } from './CartContext';

export const Product = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const product = {
      name: props.name,
      price: props.price,
      stock: props.stock,
    };
    setCart((currentState) => [...currentState, product]);
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <h4>Price : {props.price}</h4>
      <h4>Quantity : {props.stock}</h4>
      <button onClick={addToCart}>+</button>
      <button onClick={addToCart}>-</button>
      <hr />
    </div>
  );
};

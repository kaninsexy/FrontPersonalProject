import React from 'react';
import { Cart } from '../../ShoppingList/Cart';
import { CartProvider } from '../../ShoppingList/CartContext';
import { ProductList } from '../../ShoppingList/ProductList';

export default function Index() {
  return (
    <CartProvider>
      <div>
        <Cart />
        <ProductList />
      </div>
    </CartProvider>
  );
}

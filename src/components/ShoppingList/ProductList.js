import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import LocalStorageService from '../../services/localStorageService';
import jwtDecode from 'jwt-decode';
import axios from '../../config/axios';

export const ProductList = () => {
  const [product, setProduct] = useState([]);
  const database = [
    { name: 'red tshirt', price: 10.99, id: 1 },
    { name: 'yellow hoodie', price: 24.99, id: 2 },
    { name: 'blue polo', price: 18.99, id: 3 },
  ];

  const fetchProduct = async () => {
    const httpResponse = await axios.get('/product');

    setProduct(httpResponse.data);
  };

  useEffect(() => {
    const token = LocalStorageService.getToken();
    fetchProduct();
    if (token) {
      const user = jwtDecode(token);
    }
  }, []);

  return (
    <div>
      {product.map((item) => (
        <Product
          name={item.name}
          price={item.price}
          stock={item.stock}
          key={item.id}
        />
      ))}
    </div>
  );
};

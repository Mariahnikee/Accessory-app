// src/components/ProductList.jsx

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './ProductList.css';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button
              className="product-button"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

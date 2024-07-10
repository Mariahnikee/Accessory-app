import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[product.id] || 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button onClick={() => addToCart(product.id)} className="add-to-cart-button">
        Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
};

export default ProductCard;

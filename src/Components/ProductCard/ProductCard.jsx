import React from 'react';
import { Link } from "react-router-dom";
import './ProductCards.css';

export default function ProductCards({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="productCard">
      <div className="card">
        <img src={product.image} alt={product.name} />
        <h4 className="category">{product.category}</h4>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
      </div>
    </Link>
  );
}

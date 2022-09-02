import React from 'react';
import './styles.css';

export default function Card({ img, gameName, gamePrice }) {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt="Imagem de teste" />
      </div>
      <div className="product-content">
        <h2>{gameName}</h2>
      </div>
      <div className="product-footer">
        <h2>{gamePrice}</h2>
      </div>
    </div>
  );
}

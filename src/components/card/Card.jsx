import React from 'react';
import './Card.css';

export default function Card({ img, gameName, gameDescription }) {
  return (
    <div className="Card">
      <div className="Card_body">
        <img src={img} alt="Imagem de teste" />
        <h2 className="Card_title">{gameName}</h2>
        <p className="Card_description">{gameDescription}</p>
      </div>
    </div>
  );
}

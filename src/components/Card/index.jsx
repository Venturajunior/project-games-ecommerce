import React from 'react';
import './styles.css';

/**
 * Componente com bugs que devem ser corrigidos.
 * - Corrigir css, nome do jogo e descrição toma toda a div quando são extensos
 * deve criar um estilo ou lógica para corrigir esse problema.
 * - Formatar corretamente a prop "price", pois é um number e em JS sua representação é por "."
 * mas na tela deve aparecer com ","
 * - Deve implementar as protoTypes
 */

// eslint-disable-next-line object-curly-newline
export default function Card({ image, name, description, price = 0 }) {
  return (
    <div className="card-container">
      <a href="www.tibia.com" className="card-body">
        <img src={image} alt="Imagem de teste" className="card-image" />
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <span className="card-price">{`R$ ${price}`}</span>
      </a>
    </div>
  );
}

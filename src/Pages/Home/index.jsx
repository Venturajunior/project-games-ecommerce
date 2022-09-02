/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import { imagesList } from '../../components/Slider/sliderData';
import './styles.css';

export default function Home() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/game-list').then((response) =>
      response.json()).then(data => setGameList(data));
  }, []);

  return (
    <>
      <div className="home-title">
        <h2>Most searched games</h2>
      </div>
      <div>
        <Slider slides={imagesList} />
      </div>
      <div className="home-title">
        <h2>New games</h2>
      </div>
      <div className="home-main">
        {gameList.map(game => (
          <Card
            key={game.title}
            img={game.image}
            gameName={game.title}
            gamePrice={game.discount_price}
          />
        ))}
      </div>
    </>
  );
}

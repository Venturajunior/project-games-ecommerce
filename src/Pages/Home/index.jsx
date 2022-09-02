import React from 'react';
import Slider from '../../components/Slider';
import Card from '../../components/Card';
import { imagesList } from '../../components/Slider/sliderData';
import './styles.css';

export default function Home() {
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
        <Card
          img={imagesList.at(0).image}
          gameName={imagesList.at(0).gameName}
          gamePrice={imagesList.at(0).gamePrice}
        />
        <Card
          img={imagesList.at(1).image}
          gameName="Naruto Storm"
          gamePrice={100}
        />
        <Card
          img={imagesList.at(2).image}
          gameName="Naruto Storm"
          gamePrice={100}
        />
      </div>
    </>
  );
}

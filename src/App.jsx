import React from 'react';
import Card from './components/card/Card';
import Game01 from './assets/Game01.jpg';

function App() {
  return (
    <div>
      <Card
        img={Game01}
        gameName="Back for Blood"
        gameDescription="Back 4 Blood é um jogo de tiro em primeira pessoa dos criadores da franquia aclamada pela crítica Left 4 Dead. Você está no centro de uma guerra contra os contagiados. Esses humanos portadores de um parasita mortal se transformaram em criaturas assustadoras inclinadas a devorar os restos da civilização"
      />
    </div>
  );
}

export default App;

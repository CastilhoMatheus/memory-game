import GameBoard from './screens/GameBoard';
import StartScreen from './screens/StartScreen';
import React, { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [players, setPlayers] = useState(null);

  function handleStart(playerData) {
    setPlayers(playerData);
    setCurrentScreen('game');
  }

  return (
    <>
      {currentScreen === 'start' && <StartScreen onStart={handleStart} />}

      {currentScreen === 'game' && (
        <GameBoard
          player1={players.player1}
          player2={players.player2}
          onRestart={() => setCurrentScreen('start')}
        />
      )}
    </>
  );
}

export default App;

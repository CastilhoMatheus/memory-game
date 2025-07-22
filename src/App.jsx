import GameBoard from './screens/GameBoard';
import StartScreen from './screens/StartScreen';
import React, { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [players, setPlayers] = useState({});

  function handleStart(playerData) {
    setPlayers(playerData);
    setCurrentScreen('game');
  }

  return (
    <>
      {currentScreen === 'start' && <StartScreen onStart={handleStart} />}

      {currentScreen === 'game' && (
        <GameBoard
          initialPlayer1={players.player1}
          initialPlayer2={players.player2}
          onRestart={() => setCurrentScreen('start')}
        />
      )}
    </>
  );
}

export default App;

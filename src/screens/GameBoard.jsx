// Example layout snippet for GameBoard.jsx

import React, { useState } from 'react';
import PlayerCard from '../components/PlayerCard';
import Card from '../components/Card';
import Board from '../components/Board';
import GameOverScreen from './GameOverScreen';

export default function GameBoard({ initialPlayer1, initialPlayer2 }) {
  const [players, setPlayers] = useState([
    { ...initialPlayer1, score: 0, isTurn: true },
    { ...initialPlayer2, score: 0, isTurn: false },
  ]);

  const [gameOver, setGameOver] = useState(false);

  const checkGameOver = (matchedCount, totalPairs) => {
    if (matchedCount === totalPairs) {
      setGameOver(true);
      //onGameEnd(players); // Pass final scores to parent
    }
  };

  const switchTurn = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        isTurn: !player.isTurn, // Toggle turns
      }))
    );
  };

  const handleMatch = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.isTurn
          ? { ...player, score: player.score + 1 } // Increment current player's score
          : player
      )
    );
    // Player keeps turn (no switchTurn())
  };

  if (gameOver) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <GameOverScreen
          winner={players[0].score > players[1].score ? players[0] : players[1]}
          onRestart={() => window.location.reload()}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="flex items-start justify-center space-x-8 w-full max-w-8xl">
        <PlayerCard player={players[0]} isActive={players[0].isTurn} />

        <Board
          onMiss={switchTurn}
          onMatch={handleMatch}
          onAllMatched={checkGameOver}
        />

        <PlayerCard player={players[1]} isActive={players[1].isTurn} />
      </div>
    </div>
  );
}

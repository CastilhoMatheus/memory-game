import { useEffect, useState } from 'react';
import AvatarDisplay from '../components/AvatarDisplay';

export default function GameOverScreen({ players, onRestart }) {
  const [winner, setWinner] = useState('');

  console.log(players);

  useEffect(() => {
    if (players[0].score > players[1].score) {
      setWinner(players[0]);
    } else if (players[1].score > players[0].score) {
      setWinner(players[1]);
    } else {
      setWinner(null);
    }
  }, [players]);

  return (
    <div className="bg-slate-800 p-8 rounded-lg text-center flex flex-col items-center justify-center">
      {winner === null ? (
        <>
          <div className="w-100 flex p-10 justify-between">
            <AvatarDisplay avatar={players[0].avatar} size={23} />
            <AvatarDisplay avatar={players[1].avatar} size={23} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 pt-6">
            It's a Tie!
          </h1>
          <h3 className="text-lg text-gray-400 mb-4">
            {`${players[0].score} Pairs!`}
          </h3>
        </>
      ) : (
        <div className="w-100 items-center justify-center flex flex-col p-10">
          <AvatarDisplay avatar={winner.avatar} size={23} />
          <h1 className="text-3xl font-bold text-white mb-1 pt-6">
            {winner.name} Wins!
          </h1>
          <h3 className="text-lg text-gray-400 mb-4">
            {`${winner.score} Pairs!`}
          </h3>
        </div>
      )}
      <button
        onClick={onRestart}
        className="mt-4 px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
      >
        Play Again
      </button>
    </div>
  );
}

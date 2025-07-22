import { useState } from 'react';
import AvatarSelector from '../components/AvatarSelector';

export default function StartScreen({ onStart }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Avatar, setPlayer1Avatar] = useState(null);
  const [player2Avatar, setPlayer2Avatar] = useState(null);

  const avatars = [
    { id: 'beaver' },
    { id: 'coala' },
    { id: 'sloth' },
    { id: 'reindeer' },
  ];

  const canStart = player1Name && player2Name && player1Avatar && player2Avatar;

  function handleSubmit(e) {
    e.preventDefault();
    if (canStart)
      onStart({
        player1: { name: player1Name, avatar: player1Avatar },
        player2: { name: player2Name, avatar: player2Avatar },
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 space-y-8"
      >
        <h2 className="text-2xl font-semibold text-center">
          Memory Game Setup
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Player 1 Nickname
            </label>
            <input
              className="mt-1 block w-full border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
              placeholder="Enter nickname"
              required
            />
            <AvatarSelector
              options={avatars}
              selectedId={player1Avatar}
              onSelect={setPlayer1Avatar}
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium">
              Player 2 Nickname
            </label>
            <input
              className="mt-1 block w-full border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
              placeholder="Enter nickname"
              required
            />
            <AvatarSelector
              options={avatars}
              selectedId={player2Avatar}
              onSelect={setPlayer2Avatar}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!canStart}
          className={
            `w-full py-3 rounded text-white font-medium transition-colors duration-200 ` +
            (canStart
              ? 'bg-sky-600 hover:bg-sky-800 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed cursor-not-allowed')
          }
        >
          Start Game
        </button>
      </form>
    </div>
  );
}

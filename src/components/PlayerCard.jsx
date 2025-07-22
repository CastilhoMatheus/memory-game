import AvatarDisplay from './AvatarDisplay';

export default function PlayerCard({ player, isActive }) {
  return (
    <div
      className={
        `min-h-208  w-50 max-with-60 flex flex-col items-center p-4 n bg-white rounded-lg shadow-lg transition-all duration-300 ` +
        (isActive ? 'ring-7 ring-green-500 scale-105' : '')
      }
    >
      <div className="pt-20"></div>

      <AvatarDisplay avatar={player.avatar} alt={player.name} size={14} />
      <div className="mt-7 text-xl font-semibold text-gray-800 capitalize">
        {player.name}
      </div>
      <div className="mt-1 text-md text-gray-600">Score: {player.score}</div>
    </div>
  );
}

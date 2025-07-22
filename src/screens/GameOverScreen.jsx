export default function GameOverScreen({ winner, onRestart }) {
  return (
    <div className="bg-slate-800 p-8 rounded-lg text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        {winner ? `${winner.name} Wins!` : "It's a Tie!"}
      </h1>
      <button
        onClick={onRestart}
        className="mt-4 px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
      >
        Play Again
      </button>
    </div>
  );
}

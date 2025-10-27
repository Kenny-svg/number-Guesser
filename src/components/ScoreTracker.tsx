import { GameState } from "../types/game";

interface ScoreTrackerProps {
  gameState: GameState;
}

function ScoreTracker({ gameState }: ScoreTrackerProps) {
  const remainingAttempts = gameState.maxAttempts - gameState.attempts;
  const percentageUsed = (gameState.attempts / gameState.maxAttempts) * 100;

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">
          Remaining attempts:{" "}
          <span className="text-orange-600">{remainingAttempts}</span>
        </span>
        <span className="text-sm font-semibold text-gray-700">
          Attempts used: {gameState.attempts} / {gameState.maxAttempts}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-orange-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentageUsed}%` }}
        />
      </div>
    </div>
  );
}

export default ScoreTracker;

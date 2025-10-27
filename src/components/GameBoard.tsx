import { useState } from "react";
import { GameState, DifficultyLevel } from "../types/game";
import { initializeGame } from "../utils/gameLogic";
import DifficultySelector from "./DifficultySelector";
import GuessInput from "./GuessInput";
import FeedbackDisplay from "./FeedbackDisplay";
import ScoreTracker from "./ScoreTracker";
import GameOver from "./GameOver";

function GameBoard() {
  const [gameState, setGameState] = useState<GameState>(() =>
    initializeGame("medium")
  );

  const handleRestart = () => {
    setGameState(initializeGame(gameState.difficulty));
  };

  const handleDifficultyChange = (difficulty: DifficultyLevel) => {
    setGameState(initializeGame(difficulty));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-2">
        Number Guesser
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-blue-200 text-center mb-6 sm:mb-8">
        Guess the number between 1 and 100!
      </p>

      <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8">
        <DifficultySelector
          currentDifficulty={gameState.difficulty}
          onDifficultyChange={handleDifficultyChange}
        />

        {gameState.gameStatus !== "playing" && (
          <GameOver gameState={gameState} onRestart={handleRestart} />
        )}

        {gameState.gameStatus === "playing" && (
          <>
            <ScoreTracker gameState={gameState} />
            <GuessInput gameState={gameState} setGameState={setGameState} />
          </>
        )}

        {gameState.feedback && gameState.gameStatus === "playing" && (
          <FeedbackDisplay feedback={gameState.feedback} />
        )}
      </div>
    </div>
  );
}

export default GameBoard;

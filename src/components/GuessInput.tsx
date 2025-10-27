import { useState } from "react";
import { GameState } from "../types/game";
import { validateGuess, checkGameStatus } from "../utils/gameLogic";

interface GuessInputProps {
  gameState: GameState;
  setGameState: (state: GameState) => void;
}

function GuessInput({ gameState, setGameState }: GuessInputProps) {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateGuess(input);

    if (!validation.isValid) {
      setErrorMessage(validation.error || "Invalid input");
      setHasError(true);
      setTimeout(() => setHasError(false), 500);
      return;
    }

    const guess = validation.value!;
    const updatedState = checkGameStatus(gameState, guess);
    setGameState(updatedState);
    setInput("");
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label htmlFor="guess-input" className="sr-only">
        Enter your guess
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="guess-input"
          name="guess"
          type="number"
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your guess (1-100)"
          className={`flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
            hasError ? "border-red-500 animate-shake" : "border-gray-300"
          }`}
          disabled={gameState.gameStatus !== "playing"}
          min="1"
          max="100"
          aria-label="Guess the number between 1 and 100"
          aria-invalid={hasError}
        />
        <button
          type="submit"
          disabled={gameState.gameStatus !== "playing"}
          className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          aria-label="Submit your guess"
        >
          Guess
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2 animate-slide-in">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default GuessInput;

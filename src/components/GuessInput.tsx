import { useState } from 'react'
import { GameState } from '../types/game'
import { validateGuess, checkGameStatus } from '../utils/gameLogic'

interface GuessInputProps {
  gameState: GameState
  setGameState: (state: GameState) => void
}

function GuessInput({ gameState, setGameState }: GuessInputProps) {
  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const validation = validateGuess(input)
    
    if (!validation.isValid) {
      setErrorMessage(validation.error || 'Invalid input')
      setHasError(true)
      setTimeout(() => setHasError(false), 500)
      return
    }

    const guess = validation.value!
    const updatedState = checkGameStatus(gameState, guess)
    setGameState(updatedState)
    setInput('')
    setErrorMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your guess (1-100)"
          className={`flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
            hasError ? 'border-red-500 animate-shake' : 'border-gray-300'
          }`}
          disabled={gameState.gameStatus !== 'playing'}
        />
        <button
          type="submit"
          disabled={gameState.gameStatus !== 'playing'}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          Guess
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2 animate-slide-in">{errorMessage}</p>
      )}
    </form>
  )
}

export default GuessInput


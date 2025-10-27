import { GameState } from '../types/game'

interface GameOverProps {
  gameState: GameState
  onRestart: () => void
}

function GameOver({ gameState, onRestart }: GameOverProps) {
  const isWon = gameState.gameStatus === 'won'
  const title = isWon ? '🎉 You Won!' : '😔 Game Over'
  const message = isWon 
    ? `You guessed the number ${gameState.secretNumber} in ${gameState.attempts} attempts!`
    : `The secret number was ${gameState.secretNumber}. Better luck next time!`
  
  const bgColor = isWon ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
  const textColor = isWon ? 'text-green-700' : 'text-red-700'

  return (
    <div className={`mb-6 p-6 border-2 rounded-lg animate-bounce-in ${bgColor}`}>
      <h2 className={`text-3xl font-bold mb-2 ${textColor}`}>{title}</h2>
      <p className={`text-lg ${textColor}`}>{message}</p>
      <button
        onClick={onRestart}
        className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 hover:scale-105"
      >
        Play Again
      </button>
    </div>
  )
}

export default GameOver


import { GameState, DifficultyLevel, DIFFICULTY_SETTINGS } from '../types/game'

export function generateSecretNumber(): number {
  return Math.floor(Math.random() * 100) + 1
}

export function validateGuess(guess: string, min: number = 1, max: number = 100): { isValid: boolean; error?: string; value?: number } {
  if (!guess || guess.trim() === '') {
    return { isValid: false, error: 'Please enter a number' }
  }

  const num = parseInt(guess, 10)

  if (isNaN(num)) {
    return { isValid: false, error: 'Please enter a valid number' }
  }

  if (num < min || num > max) {
    return { isValid: false, error: `Please enter a number between ${min} and ${max}` }
  }

  return { isValid: true, value: num }
}

export function getFeedback(guess: number, secretNumber: number): string {
  if (guess === secretNumber) {
    return 'correct'
  }
  return guess > secretNumber ? 'too-high' : 'too-low'
}

export function isGameOver(gameState: GameState): boolean {
  return gameState.gameStatus !== 'playing'
}

export function checkGameStatus(gameState: GameState, guess: number): GameState {
  const feedback = getFeedback(guess, gameState.secretNumber)
  const isCorrect = feedback === 'correct'
  const isOutOfAttempts = gameState.attempts + 1 >= gameState.maxAttempts

  let newStatus: GameState['gameStatus'] = gameState.gameStatus
  if (isCorrect) {
    newStatus = 'won'
  } else if (isOutOfAttempts) {
    newStatus = 'lost'
  }

  return {
    ...gameState,
    attempts: gameState.attempts + 1,
    gameStatus: newStatus,
    feedback: isCorrect ? 'correct' : feedback,
    guessHistory: [...gameState.guessHistory, guess],
  }
}

export function initializeGame(difficulty: DifficultyLevel): GameState {
  const settings = DIFFICULTY_SETTINGS[difficulty]
  return {
    secretNumber: generateSecretNumber(),
    attempts: 0,
    maxAttempts: settings.maxAttempts,
    gameStatus: 'playing',
    difficulty,
    guessHistory: [],
    feedback: '',
    errorMessage: '',
  }
}


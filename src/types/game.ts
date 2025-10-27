export type DifficultyLevel = 'easy' | 'medium' | 'hard'

export interface GameState {
  secretNumber: number
  attempts: number
  maxAttempts: number
  gameStatus: 'playing' | 'won' | 'lost'
  difficulty: DifficultyLevel
  guessHistory: number[]
  feedback: string
  errorMessage: string
}

export interface DifficultySettings {
  maxAttempts: number
  label: string
  color: string
}

export const DIFFICULTY_SETTINGS: Record<DifficultyLevel, DifficultySettings> = {
  easy: {
    maxAttempts: 15,
    label: 'Easy',
    color: 'green',
  },
  medium: {
    maxAttempts: 10,
    label: 'Medium',
    color: 'yellow',
  },
  hard: {
    maxAttempts: 5,
    label: 'Hard',
    color: 'red',
  },
}


import {
  generateSecretNumber,
  validateGuess,
  getFeedback,
  isGameOver,
  checkGameStatus,
  initializeGame,
} from '../gameLogic'
import { GameState } from '../../types/game'

describe('gameLogic', () => {
  describe('generateSecretNumber', () => {
    it('should generate a number between 1 and 100', () => {
      const number = generateSecretNumber()
      expect(number).toBeGreaterThanOrEqual(1)
      expect(number).toBeLessThanOrEqual(100)
    })

    it('should generate different numbers across multiple calls', () => {
      const numbers = new Set()
      for (let i = 0; i < 100; i++) {
        numbers.add(generateSecretNumber())
      }
      // Should have some variety (at least 10 different numbers in 100 attempts)
      expect(numbers.size).toBeGreaterThan(10)
    })
  })

  describe('validateGuess', () => {
    it('should return valid for correct input', () => {
      const result = validateGuess('50', 1, 100)
      expect(result.isValid).toBe(true)
      expect(result.value).toBe(50)
      expect(result.error).toBeUndefined()
    })

    it('should return error for empty input', () => {
      const result = validateGuess('')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a number')
      expect(result.value).toBeUndefined()
    })

    it('should return error for non-numeric input', () => {
      const result = validateGuess('abc')
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a valid number')
    })

    it('should return error for number below range', () => {
      const result = validateGuess('0', 1, 100)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a number between 1 and 100')
    })

    it('should return error for number above range', () => {
      const result = validateGuess('101', 1, 100)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe('Please enter a number between 1 and 100')
    })
  })

  describe('getFeedback', () => {
    it('should return correct for exact match', () => {
      expect(getFeedback(50, 50)).toBe('correct')
    })

    it('should return too-high for guess greater than secret', () => {
      expect(getFeedback(75, 50)).toBe('too-high')
    })

    it('should return too-low for guess less than secret', () => {
      expect(getFeedback(25, 50)).toBe('too-low')
    })
  })

  describe('isGameOver', () => {
    it('should return false when game is playing', () => {
      const gameState: GameState = {
        secretNumber: 50,
        attempts: 5,
        maxAttempts: 10,
        gameStatus: 'playing',
        difficulty: 'medium',
        guessHistory: [],
        feedback: '',
        errorMessage: '',
      }
      expect(isGameOver(gameState)).toBe(false)
    })

    it('should return true when game is won', () => {
      const gameState: GameState = {
        secretNumber: 50,
        attempts: 5,
        maxAttempts: 10,
        gameStatus: 'won',
        difficulty: 'medium',
        guessHistory: [],
        feedback: '',
        errorMessage: '',
      }
      expect(isGameOver(gameState)).toBe(true)
    })

    it('should return true when game is lost', () => {
      const gameState: GameState = {
        secretNumber: 50,
        attempts: 10,
        maxAttempts: 10,
        gameStatus: 'lost',
        difficulty: 'medium',
        guessHistory: [],
        feedback: '',
        errorMessage: '',
      }
      expect(isGameOver(gameState)).toBe(true)
    })
  })

  describe('checkGameStatus', () => {
    it('should mark as won when guess is correct', () => {
      const gameState: GameState = {
        secretNumber: 50,
        attempts: 0,
        maxAttempts: 10,
        gameStatus: 'playing',
        difficulty: 'medium',
        guessHistory: [],
        feedback: '',
        errorMessage: '',
      }

      const updatedState = checkGameStatus(gameState, 50)
      expect(updatedState.gameStatus).toBe('won')
      expect(updatedState.attempts).toBe(1)
      expect(updatedState.feedback).toBe('correct')
      expect(updatedState.guessHistory).toContain(50)
    })

    it('should mark as lost when out of attempts', () => {
      const gameState: GameState = {
        secretNumber: 50,
        attempts: 9,
        maxAttempts: 10,
        gameStatus: 'playing',
        difficulty: 'medium',
        guessHistory: [],
        feedback: '',
        errorMessage: '',
      }

      const updatedState = checkGameStatus(gameState, 75)
      expect(updatedState.gameStatus).toBe('lost')
      expect(updatedState.attempts).toBe(10)
      expect(updatedState.feedback).toBe('too-high')
    })
  })

  describe('initializeGame', () => {
    it('should initialize game with easy difficulty', () => {
      const gameState = initializeGame('easy')
      expect(gameState.maxAttempts).toBe(15)
      expect(gameState.difficulty).toBe('easy')
      expect(gameState.gameStatus).toBe('playing')
      expect(gameState.attempts).toBe(0)
      expect(gameState.secretNumber).toBeGreaterThanOrEqual(1)
      expect(gameState.secretNumber).toBeLessThanOrEqual(100)
    })

    it('should initialize game with medium difficulty', () => {
      const gameState = initializeGame('medium')
      expect(gameState.maxAttempts).toBe(10)
      expect(gameState.difficulty).toBe('medium')
    })

    it('should initialize game with hard difficulty', () => {
      const gameState = initializeGame('hard')
      expect(gameState.maxAttempts).toBe(5)
      expect(gameState.difficulty).toBe('hard')
    })
  })
})


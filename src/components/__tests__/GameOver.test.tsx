import { render, screen, fireEvent } from '@testing-library/react'
import GameOver from '../GameOver'
import { GameState } from '../../types/game'

describe('GameOver', () => {
  const mockOnRestart = jest.fn()

  beforeEach(() => {
    mockOnRestart.mockClear()
  })

  it('renders win message when game is won', () => {
    const gameState: GameState = {
      secretNumber: 42,
      attempts: 5,
      maxAttempts: 10,
      gameStatus: 'won',
      difficulty: 'medium',
      guessHistory: [1, 2, 3, 4, 5],
      feedback: '',
      errorMessage: '',
    }

    render(<GameOver gameState={gameState} onRestart={mockOnRestart} />)
    expect(screen.getByText(/You Won!/)).toBeInTheDocument()
    expect(screen.getByText(/You guessed the number 42 in 5 attempts/)).toBeInTheDocument()
  })

  it('renders loss message when game is lost', () => {
    const gameState: GameState = {
      secretNumber: 42,
      attempts: 10,
      maxAttempts: 10,
      gameStatus: 'lost',
      difficulty: 'medium',
      guessHistory: [],
      feedback: '',
      errorMessage: '',
    }

    render(<GameOver gameState={gameState} onRestart={mockOnRestart} />)
    expect(screen.getByText(/Game Over/)).toBeInTheDocument()
    expect(screen.getByText(/The secret number was 42/)).toBeInTheDocument()
  })

  it('calls onRestart when play again button is clicked', () => {
    const gameState: GameState = {
      secretNumber: 42,
      attempts: 5,
      maxAttempts: 10,
      gameStatus: 'won',
      difficulty: 'medium',
      guessHistory: [],
      feedback: '',
      errorMessage: '',
    }

    render(<GameOver gameState={gameState} onRestart={mockOnRestart} />)
    const button = screen.getByText('Play Again')
    fireEvent.click(button)
    expect(mockOnRestart).toHaveBeenCalledTimes(1)
  })
})


import { render, screen, fireEvent } from '@testing-library/react'
import GuessInput from '../GuessInput'
import { GameState } from '../../types/game'

describe('GuessInput', () => {
  const mockSetGameState = jest.fn()
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

  beforeEach(() => {
    mockSetGameState.mockClear()
  })

  it('renders input and button', () => {
    render(<GuessInput gameState={gameState} setGameState={mockSetGameState} />)
    expect(screen.getByPlaceholderText(/Enter your guess/)).toBeInTheDocument()
    expect(screen.getByText('Guess')).toBeInTheDocument()
  })

  it('shows error for invalid input', async () => {
    render(<GuessInput gameState={gameState} setGameState={mockSetGameState} />)
    const input = screen.getByPlaceholderText(/Enter your guess/)
    const button = screen.getByText('Guess')

    fireEvent.change(input, { target: { value: 'abc' } })
    fireEvent.click(button)

    expect(await screen.findByText(/Please enter a valid number/)).toBeInTheDocument()
  })

  it('shows error for out of range number', async () => {
    render(<GuessInput gameState={gameState} setGameState={mockSetGameState} />)
    const input = screen.getByPlaceholderText(/Enter your guess/)
    const button = screen.getByText('Guess')

    fireEvent.change(input, { target: { value: '101' } })
    fireEvent.click(button)

    expect(await screen.findByText(/Please enter a number between 1 and 100/)).toBeInTheDocument()
  })

  it('disables input when game is over', () => {
    const gameOverState: GameState = {
      ...gameState,
      gameStatus: 'won',
    }
    render(<GuessInput gameState={gameOverState} setGameState={mockSetGameState} />)
    const input = screen.getByPlaceholderText(/Enter your guess/) as HTMLInputElement
    expect(input.disabled).toBe(true)
  })
})


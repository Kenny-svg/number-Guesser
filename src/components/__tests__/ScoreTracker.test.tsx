import { render, screen } from '@testing-library/react'
import ScoreTracker from '../ScoreTracker'
import { GameState } from '../../types/game'

describe('ScoreTracker', () => {
  const gameState: GameState = {
    secretNumber: 50,
    attempts: 3,
    maxAttempts: 10,
    gameStatus: 'playing',
    difficulty: 'medium',
    guessHistory: [],
    feedback: '',
    errorMessage: '',
  }

  it('renders remaining attempts', () => {
    render(<ScoreTracker gameState={gameState} />)
    expect(screen.getByText(/Remaining attempts:/)).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  it('renders attempts used', () => {
    render(<ScoreTracker gameState={gameState} />)
    expect(screen.getByText(/Attempts used:/)).toBeInTheDocument()
    expect(screen.getByText('3 / 10')).toBeInTheDocument()
  })
})


import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GameBoard from '../GameBoard'

describe('GameBoard', () => {
  it('renders game title and description', () => {
    render(<GameBoard />)
    expect(screen.getByText('Number Guesser')).toBeInTheDocument()
    expect(screen.getByText(/Guess the number between 1 and 100/)).toBeInTheDocument()
  })

  it('renders difficulty selector', () => {
    render(<GameBoard />)
    expect(screen.getByText(/Select Difficulty:/)).toBeInTheDocument()
  })

  it('renders initial game state with medium difficulty', () => {
    render(<GameBoard />)
    expect(screen.getByText(/10 attempts/)).toBeInTheDocument()
  })
})


import { render, screen, fireEvent } from "@testing-library/react";
import DifficultySelector from "../DifficultySelector";

describe("DifficultySelector", () => {
  const mockOnDifficultyChange = jest.fn();

  beforeEach(() => {
    mockOnDifficultyChange.mockClear();
  });

  it("renders all difficulty levels", () => {
    render(
      <DifficultySelector
        currentDifficulty="medium"
        onDifficultyChange={mockOnDifficultyChange}
      />
    );
    expect(screen.getByText(/Easy/)).toBeInTheDocument();
    expect(screen.getByText(/Medium/)).toBeInTheDocument();
    expect(screen.getByText(/Hard/)).toBeInTheDocument();
  });

  it("calls onDifficultyChange when a difficulty is clicked", () => {
    render(
      <DifficultySelector
        currentDifficulty="medium"
        onDifficultyChange={mockOnDifficultyChange}
      />
    );
    const easyButton = screen.getByText(/Easy/);
    fireEvent.click(easyButton);
    expect(mockOnDifficultyChange).toHaveBeenCalledWith("easy");
  });
});

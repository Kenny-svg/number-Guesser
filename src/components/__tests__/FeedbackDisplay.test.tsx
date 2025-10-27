import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FeedbackDisplay from "../FeedbackDisplay";

describe("FeedbackDisplay", () => {
  it("renders too high feedback", () => {
    render(<FeedbackDisplay feedback="too-high" />);
    expect(screen.getByText(/Too high!/)).toBeInTheDocument();
  });

  it("renders too low feedback", () => {
    render(<FeedbackDisplay feedback="too-low" />);
    expect(screen.getByText(/Too low!/)).toBeInTheDocument();
  });

  it("renders correct feedback", () => {
    render(<FeedbackDisplay feedback="correct" />);
    expect(screen.getByText(/Congratulations/)).toBeInTheDocument();
  });
});

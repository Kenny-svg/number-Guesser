# Number Guesser Game

A modern, interactive number guessing game built with React, TypeScript, and Tailwind CSS. Test your intuition and guess the secret number between 1 and 100!

![Number Guesser Game](https://via.placeholder.com/800x400?text=Number+Guesser+Game)

## 🎮 Features

### Core Features
- **Random Secret Number**: The game generates a random number between 1 and 100
- **Interactive Interface**: Clean, intuitive UI with real-time feedback
- **Smart Feedback**: Get hints on whether your guess is too high or too low
- **Attempt Tracking**: Monitor your remaining attempts as you play
- **Win/Loss Detection**: Clear indicators when you win or lose

### Optional Features
- **Difficulty Levels**: Choose from three difficulty settings:
  - **Easy**: 15 attempts
  - **Medium**: 10 attempts (default)
  - **Hard**: 5 attempts
- **Restart Functionality**: Start a new game without reloading the page
- **Smooth Animations**: Beautiful Tailwind CSS animations for a polished experience:
  - Slide-in feedback messages
  - Shake animation on invalid input
  - Bounce-in for game over messages
  - Hover effects on interactive elements

### Error Handling
- Input validation for numbers within the valid range (1-100)
- Graceful handling of non-numeric inputs
- User-friendly error messages
- Prevents submissions after game ends
- Empty input detection

## 🚀 How to Play

1. Select your preferred difficulty level (Easy, Medium, or Hard)
2. Enter your guess in the input field (number between 1-100)
3. Click "Guess" or press Enter
4. Receive feedback on your guess:
   - 📈 "Too high!" - Try a lower number
   - 📉 "Too low!" - Try a higher number
   - 🎉 "Congratulations!" - You guessed it!
5. Continue guessing until you find the number or run out of attempts
6. Click "Play Again" to start a new game

## 🛠️ Technology Stack

- **React 18**: Modern UI library for building interactive components
- **TypeScript**: Type-safe JavaScript for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server
- **Vitest**: Modern testing framework for unit and integration tests
- **React Testing Library**: Testing utilities for React components

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/number-guesser-game.git
cd number-guesser-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

Watch mode for development:
```bash
npm run test:watch
```

### Test Coverage
- Unit tests for game logic functions
- Component tests for all React components
- Integration tests for complete game flow
- Edge case testing (boundary values, invalid inputs)
- **Coverage**: >80% code coverage

## 📝 Build for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Project Structure

```
number-guesser-game/
├── src/
│   ├── components/          # React components
│   │   ├── GameBoard.tsx    # Main game container
│   │   ├── DifficultySelector.tsx
│   │   ├── GuessInput.tsx
│   │   ├── FeedbackDisplay.tsx
│   │   ├── ScoreTracker.tsx
│   │   └── GameOver.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── game.ts
│   ├── utils/              # Utility functions
│   │   └── gameLogic.ts
│   ├── test/               # Test setup
│   │   └── setup.ts
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🌐 Deployment

The application is configured for easy deployment to multiple platforms:

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Vercel
Simply connect your GitHub repository to Vercel for automatic deployments.

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## ⭐ Acknowledgments

- Built for Web3Bridge Cohort XIV Pre-Qualification Exercise
- Thanks to the React and Tailwind CSS communities for amazing tools and resources

---

**Note**: This project was developed as part of the Web3Bridge Cohort XIV Pre-Qualification Exercise, demonstrating proficiency in React, TypeScript, testing, and modern web development practices.


# Number Guesser Game 🎮

A modern, interactive number guessing game built with React, TypeScript, and Tailwind CSS. Test your intuition and guess the secret number between 1 and 100!

[![Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-orange)](https://YOUR_USERNAME.github.io/Number-Guesser-Game/)

## 🎮 Features

### Core Features

- ✅ **Random Secret Number**: The game generates a random number between 1 and 100
- ✅ **Interactive Interface**: Clean, intuitive UI with real-time feedback
- ✅ **Smart Feedback**: Get hints on whether your guess is too high or too low
- ✅ **Attempt Tracking**: Monitor your remaining attempts as you play
- ✅ **Win/Loss Detection**: Clear indicators when you win or lose

### Optional Features

- ✅ **Difficulty Levels**: Choose from three difficulty settings:
  - **Easy**: 15 attempts
  - **Medium**: 10 attempts (default)
  - **Hard**: 5 attempts
- ✅ **Restart Functionality**: Start a new game without reloading the page
- ✅ **Smooth Animations**: Beautiful Tailwind CSS animations
- ✅ **Mobile Responsive**: Works perfectly on all devices
- ✅ **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

### Error Handling

- ✅ Input validation for numbers within the valid range (1-100)
- ✅ Graceful handling of non-numeric inputs
- ✅ User-friendly error messages
- ✅ Prevents submissions after game ends

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

- **React 18**: Modern UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool
- **Vitest**: Modern testing framework
- **React Testing Library**: Component testing utilities

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Number-Guesser-Game.git
cd Number-Guesser-Game

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Number-Guesser-Game.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
4. The workflow will automatically deploy!

Your site will be live at: `https://YOUR_USERNAME.github.io/Number-Guesser-Game/`

## 📋 Project Structure

```
Number-Guesser-Game/
├── src/
│   ├── components/          # React components
│   │   ├── GameBoard.tsx
│   │   ├── DifficultySelector.tsx
│   │   ├── GuessInput.tsx
│   │   ├── FeedbackDisplay.tsx
│   │   ├── ScoreTracker.tsx
│   │   └── GameOver.tsx
│   ├── types/              # TypeScript definitions
│   ├── utils/              # Game logic
│   ├── test/               # Test setup
│   └── components/__tests__ # Component tests
├── public/                 # Static assets
├── .github/workflows/      # CI/CD
└── README.md
```

## 🎯 Build

```bash
npm run build
```

## 📝 License

MIT License

## 👤 Author

**Your Name**

- GitHub: [@kenny-svg](https://github.com/kenny-svg)

## 🙏 Acknowledgments

Built for Web3Bridge Cohort XIV Pre-Qualification Exercise

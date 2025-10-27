import { DifficultyLevel, DIFFICULTY_SETTINGS } from '../types/game'

interface DifficultySelectorProps {
  currentDifficulty: DifficultyLevel
  onDifficultyChange: (difficulty: DifficultyLevel) => void
}

function DifficultySelector({ currentDifficulty, onDifficultyChange }: DifficultySelectorProps) {
  const difficulties: DifficultyLevel[] = ['easy', 'medium', 'hard']

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Difficulty:
      </label>
      <div className="flex gap-2 flex-wrap">
        {difficulties.map((difficulty) => {
          const settings = DIFFICULTY_SETTINGS[difficulty]
          const isActive = currentDifficulty === difficulty
          const bgColorClass = isActive ? `bg-${settings.color}-500` : `bg-gray-200`
          const textColorClass = isActive ? 'text-white' : 'text-gray-700'
          
          return (
            <button
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${bgColorClass} ${textColorClass}`}
            >
              {settings.label} ({settings.maxAttempts} attempts)
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DifficultySelector


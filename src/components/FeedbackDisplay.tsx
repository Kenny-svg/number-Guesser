interface FeedbackDisplayProps {
  feedback: string
}

function FeedbackDisplay({ feedback }: FeedbackDisplayProps) {
  const feedbackConfig: Record<string, { text: string; color: string }> = {
    'too-high': {
      text: '📈 Too high! Try a lower number.',
      color: 'text-red-600',
    },
    'too-low': {
      text: '📉 Too low! Try a higher number.',
      color: 'text-blue-600',
    },
    'correct': {
      text: '🎉 Congratulations! You guessed it!',
      color: 'text-green-600',
    },
  }

  const config = feedbackConfig[feedback] || { text: '', color: '' }

  return (
    <div className={`text-center text-xl font-bold ${config.color} animate-slide-in`}>
      {config.text}
    </div>
  )
}

export default FeedbackDisplay


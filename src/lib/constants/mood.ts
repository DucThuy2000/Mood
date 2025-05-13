export const MOOD_TYPES = {
  HAPPY: {
    name: 'Happy',
    emoji: '😄',
    description: 'Feeling good and positive!',
    color: 'yellow-400'
  },
  EXCITED: {
    name: 'Excited',
    emoji: '🤩',
    description: 'Thrilled and enthusiastic!',
    color: 'amber-500'
  },
  RELAXED: {
    name: 'Relaxed',
    emoji: '😌',
    description: 'Calm and at ease.',
    color: 'green-400'
  },
  NEUTRAL: {
    name: 'Neutral',
    emoji: '😐',
    description: 'Just... fine.',
    color: 'gray-400'
  },
  BORED: {
    name: 'Bored',
    emoji: '😒',
    description: 'Nothing excites me right now.',
    color: 'purple-300'
  },
  SAD: {
    name: 'Sad',
    emoji: '😢',
    description: 'Feeling down and blue.',
    color: 'blue-400'
  },
  ANGRY: {
    name: 'Angry',
    emoji: '😡',
    description: 'Frustrated and annoyed!',
    color: 'red-500'
  },
  CONFUSED: {
    name: 'Confused',
    emoji: '🤔',
    description: 'Not sure what to feel.',
    color: 'orange-300'
  },
  RANDOM: {
    name: 'Random',
    emoji: '🎲',
    description: 'Surprise me with any mood!',
    color: 'pink-400'
  }
} as const;

export const CONTENT_CATEGORIES = {
  FILM: {
    id: 'film',
    name: 'Film',
    icon: 'Film',
    description: 'Movies and TV shows to match your mood'
  },
  MUSIC: {
    id: 'music',
    name: 'Music',
    icon: 'Music',
    description: 'Tunes that sync with how you feel'
  },
  VIDEO: {
    id: 'video',
    name: 'Video',
    icon: 'Video',
    description: 'Short clips and content for quick entertainment'
  },
  MEMES: {
    id: 'memes',
    name: 'Memes',
    icon: 'Image',
    description: 'Funny images to match your mood'
  },
  SURPRISE: {
    id: 'surprise',
    name: 'WTF?',
    icon: 'Sparkles',
    description: 'Random chaos - you never know what you\'ll get!'
  }
} as const;
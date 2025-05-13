export const MOOD_TYPES = {
  HAPPY: {
    name: "Cloud Nine",
    emoji: "😄",
    description: "You're radiating good vibes!",
    color: "yellow-400",
  },
  WORKING: {
    name: "Grind Mode",
    emoji: "💼",
    description: "Focused and getting things done.",
    color: "blue-600",
  },
  EXCITED: {
    name: "Buzz Overload",
    emoji: "🤩",
    description: "Thrilled and ready to take on the world!",
    color: "amber-500",
  },
  RELAXED: {
    name: "Zero Stress",
    emoji: "😌",
    description: "Keepin' it cool and collected.",
    color: "green-400",
  },
  PLAYING: {
    name: "Game On",
    emoji: "🎮",
    description: "In the gaming zone!",
    color: "indigo-500",
  },
  NEUTRAL: {
    name: "The Mehs",
    emoji: "😐",
    description: "Neither here nor there.",
    color: "gray-400",
  },
  BORED: {
    name: "Snoozeville",
    emoji: "😒",
    description: "Looking for something to spark interest.",
    color: "purple-300",
  },
  SAD: {
    name: "Blue Feels",
    emoji: "😢",
    description: "Need a pick-me-up?",
    color: "blue-400",
  },
  ANGRY: {
    name: "Rage Mode",
    emoji: "😡",
    description: "Let's channel that energy!",
    color: "red-500",
  },
  EXERCISING: {
    name: "Fitness Frenzy",
    emoji: "🏋️",
    description: "Working on that summer body.",
    color: "emerald-500",
  },
  CONFUSED: {
    name: "Brain Fog",
    emoji: "🤔",
    description: "What is even happening right now?",
    color: "orange-300",
  },
  RANDOM: {
    name: "Mood Roulette",
    emoji: "🎲",
    description: "Surprise me with any mood!",
    color: "pink-400",
  },
} as const;

export const CONTENT_CATEGORIES = {
  FILM: {
    id: "film",
    name: "Film",
    icon: "Film",
    description: "Movies and TV shows to match your mood",
  },
  MUSIC: {
    id: "music",
    name: "Music",
    icon: "Music",
    description: "Tunes that sync with how you feel",
  },
  VIDEO: {
    id: "video",
    name: "Video",
    icon: "Video",
    description: "Short clips and content for quick entertainment",
  },
  MEMES: {
    id: "memes",
    name: "Memes",
    icon: "Image",
    description: "Funny images to match your mood",
  },
  SURPRISE: {
    id: "surprise",
    name: "WTF?",
    icon: "Sparkles",
    description: "Random chaos - you never know what you'll get!",
  },
} as const;

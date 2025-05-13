import { MOOD_TYPES, CONTENT_CATEGORIES } from "../constants/mood";

export type MoodType = keyof typeof MOOD_TYPES;
export type MoodData = (typeof MOOD_TYPES)[MoodType] & { gifUrl?: string };

export type ContentCategory = keyof typeof CONTENT_CATEGORIES;
export type ContentCategoryData = (typeof CONTENT_CATEGORIES)[ContentCategory];

export interface FilmSuggestion {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  year?: number;
  streamingLinks: {
    provider: string;
    url: string;
  }[];
}

export interface MusicSuggestion {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  thumbnailUrl?: string;
}

export interface MemeSuggestion {
  id: string;
  imageUrl: string;
  caption?: string;
  altText?: string;
}

export interface UserMood {
  type: MoodType;
  intensity?: number; // 1-10 scale
  timestamp: Date;
}

export type SuggestionType =
  | { type: "film"; data: FilmSuggestion[] }
  | { type: "music"; data: MusicSuggestion[] }
  | { type: "video"; data: MusicSuggestion[] } // Reusing music structure since both use YouTube
  | { type: "memes"; data: MemeSuggestion[] }
  | {
      type: "surprise";
      data: (FilmSuggestion | MusicSuggestion | MemeSuggestion)[];
    };

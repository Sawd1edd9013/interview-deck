export type BoxLevel = 1 | 2 | 3 | 4 | 5;

export interface CardProgress {
  questionId: string;
  box: BoxLevel;
  nextReviewAt: string;
  lastReviewedAt: string;
}

export interface ProgressState {
  cards: Record<string, CardProgress>;
}

export interface ProgressSchema {
  progress: ProgressState;
}

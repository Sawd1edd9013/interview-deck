import { addDays } from "@/shared/lib";
import type { BoxLevel, CardProgress } from "./types";

export const MAX_BOX: BoxLevel = 5;

export const BOX_INTERVALS_DAYS: Record<BoxLevel, number> = {
  1: 1,
  2: 2,
  3: 4,
  4: 7,
  5: 14,
};

export const getNextBox = (
  currentBox: BoxLevel | undefined,
  isKnown: boolean,
): BoxLevel => {
  if (!isKnown) {
    return 1;
  }

  const box = currentBox ?? 1;

  return box >= MAX_BOX ? MAX_BOX : ((box + 1) as BoxLevel);
};

export const applyAnswer = (
  progress: CardProgress | undefined,
  answer: { questionId: string; isKnown: boolean; today: string },
): CardProgress => {
  const box = getNextBox(progress?.box, answer.isKnown);
  const nextReviewAt = answer.isKnown
    ? addDays(answer.today, BOX_INTERVALS_DAYS[box])
    : answer.today;

  return {
    questionId: answer.questionId,
    box,
    nextReviewAt,
    lastReviewedAt: answer.today,
  };
};

export const isDue = (
  progress: CardProgress | undefined,
  today: string,
): boolean => !progress || progress.nextReviewAt <= today;

export const isMastered = (progress: CardProgress | undefined): boolean =>
  progress?.box === MAX_BOX;

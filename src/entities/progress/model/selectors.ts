import type { ProgressSchema } from "./types";

export const selectProgressCards = (state: ProgressSchema) =>
  state.progress.cards;

export const selectCardProgress = (state: ProgressSchema, questionId: string) =>
  state.progress.cards[questionId];

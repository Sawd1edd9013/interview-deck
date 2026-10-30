import type { SessionSchema } from "./types";

export const selectSessionStatus = (state: SessionSchema) =>
  state.session.status;

export const selectCurrentQuestionId = (state: SessionSchema) =>
  state.session.questionIds[state.session.currentIndex] ?? null;

export const selectSessionPosition = (state: SessionSchema) => ({
  current: state.session.currentIndex + 1,
  total: state.session.questionIds.length,
});

export const selectSessionKnownIds = (state: SessionSchema) =>
  state.session.knownIds;

export const selectSessionRepeatIds = (state: SessionSchema) =>
  state.session.repeatIds;

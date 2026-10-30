import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { applyAnswer } from "./leitner";
import type { ProgressState } from "./types";

export const initialProgressState: ProgressState = {
  cards: {},
};

interface CardAnsweredPayload {
  questionId: string;
  isKnown: boolean;
  today: string;
}

const progressSlice = createSlice({
  name: "progress",
  initialState: initialProgressState,
  reducers: {
    cardAnswered(state, action: PayloadAction<CardAnsweredPayload>) {
      const { questionId } = action.payload;

      state.cards[questionId] = applyAnswer(
        state.cards[questionId],
        action.payload,
      );
    },
    progressReset() {
      return initialProgressState;
    },
  },
});

export const { cardAnswered, progressReset } = progressSlice.actions;
export const progressReducer = progressSlice.reducer;

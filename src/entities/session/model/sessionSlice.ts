import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SessionState } from "./types";

const initialSessionState: SessionState = {
  questionIds: [],
  currentIndex: 0,
  knownIds: [],
  repeatIds: [],
  status: "idle",
};

interface AnswerRecordedPayload {
  questionId: string;
  isKnown: boolean;
}

const sessionSlice = createSlice({
  name: "session",
  initialState: initialSessionState,
  reducers: {
    sessionStarted(state, action: PayloadAction<string[]>) {
      state.questionIds = action.payload;
      state.currentIndex = 0;
      state.knownIds = [];
      state.repeatIds = [];
      state.status = action.payload.length > 0 ? "active" : "finished";
    },
    answerRecorded(state, action: PayloadAction<AnswerRecordedPayload>) {
      if (state.status !== "active") {
        return;
      }

      const { questionId, isKnown } = action.payload;

      if (isKnown) {
        state.knownIds.push(questionId);
      } else {
        state.repeatIds.push(questionId);
      }

      state.currentIndex += 1;

      if (state.currentIndex >= state.questionIds.length) {
        state.status = "finished";
      }
    },
    sessionReset() {
      return initialSessionState;
    },
  },
});

export const { sessionStarted, answerRecorded, sessionReset } =
  sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import {
  initialProgressState,
  progressReducer,
  type ProgressState,
} from "@/entities/progress";
import { sessionReducer } from "@/entities/session";
import { loadFromStorage, saveToStorage } from "@/shared/lib";

const PROGRESS_STORAGE_KEY = "interview-deck:progress";

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    session: sessionReducer,
  },
  preloadedState: {
    progress: loadFromStorage<ProgressState>(
      PROGRESS_STORAGE_KEY,
      initialProgressState,
    ),
  },
});

let previousProgress = store.getState().progress;

store.subscribe(() => {
  const { progress } = store.getState();

  if (progress !== previousProgress) {
    previousProgress = progress;
    saveToStorage(PROGRESS_STORAGE_KEY, progress);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

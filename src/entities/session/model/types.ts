export type SessionStatus = "idle" | "active" | "finished";

export interface SessionState {
  questionIds: string[];
  currentIndex: number;
  knownIds: string[];
  repeatIds: string[];
  status: SessionStatus;
}

export interface SessionSchema {
  session: SessionState;
}

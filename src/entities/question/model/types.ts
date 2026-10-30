export type TopicId = "javascript" | "typescript" | "react" | "css" | "browser";

export type Difficulty = "easy" | "medium" | "hard";

export interface Topic {
  id: TopicId;
  title: string;
}

export interface Question {
  id: string;
  topic: TopicId;
  difficulty: Difficulty;
  question: string;
  answer: string;
}

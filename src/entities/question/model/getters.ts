import { QUESTIONS } from "./questionsData";
import type { Question, TopicId } from "./types";

export const getQuestionById = (id: string): Question | undefined =>
  QUESTIONS.find((question) => question.id === id);

export const getQuestionsByTopics = (topicIds: TopicId[]): Question[] =>
  QUESTIONS.filter((question) => topicIds.includes(question.topic));

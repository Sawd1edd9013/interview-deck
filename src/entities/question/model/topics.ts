import type { Topic, TopicId } from "./types";

export const TOPICS: Topic[] = [
  { id: "javascript", title: "JavaScript" },
  { id: "typescript", title: "TypeScript" },
  { id: "react", title: "React" },
  { id: "css", title: "CSS" },
  { id: "browser", title: "Браузер и сеть" },
];

export const getTopicTitle = (topicId: TopicId): string =>
  TOPICS.find((topic) => topic.id === topicId)?.title ?? topicId;

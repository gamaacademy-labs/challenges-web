import { ChallengeDeliverable } from "../challenge/challenge.types";

export type Challenge = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  level: string;
  instruction: string;
  tags: string;
  score: string;
  answers: string;
  startedAt: string;
  finishAt: string;
  createdAt: string;
  updatedAt: string;
  challenge_deliverables?: ChallengeDeliverable[];
};

export type GetChallengesResponse = Challenge[];

export type Material = {
  id: string;
  title: string;
  link: string;
  type: string;
  challengeId: string;
  createdAt: string;
  updatedAt: string;
};

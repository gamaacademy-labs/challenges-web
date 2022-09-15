import { User } from "./../user/user.types";
export type UserChallenge = {
  id: string;
  score: string;
  startedAt: string;
  finishedAt: string;
  challengeId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};

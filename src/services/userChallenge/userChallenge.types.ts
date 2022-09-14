import { User } from "./../user/user.types";
export type UserChallenge = {
  id: string;
  score: string;
  startedAt: string;
  finishAt: string;
  challengeId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};

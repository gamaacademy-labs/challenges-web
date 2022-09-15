import { Challenge } from "./../challenges/challenges.types";
import { User } from "./../user/user.types";
export type StartChallenge = {
  id: string;
  challengeId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
};

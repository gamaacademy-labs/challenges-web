import { Challenge } from "../../services/challenges/challenges.types";

export enum ChallengeTabs {
  DESCRIPTION = "description",
  DELIVERABLES = "deliverables",
  RANKING = "ranking",
}

export interface ChallengeProps {
  challenge: Challenge;
}

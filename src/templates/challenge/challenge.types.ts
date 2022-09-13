import { ChallengeById } from "./../../services/challenge/challenge.types";
export enum ChallengeTabs {
  DESCRIPTION = "description",
  DELIVERABLES = "deliverables",
  RANKING = "ranking",
}
export interface ChallengeProps {
  challengeById: ChallengeById[];
}

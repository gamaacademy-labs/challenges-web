import {
  Challenge,
  Material,
} from "./../../services/challenges/challenges.types";
import { UserChallenge } from "./../../services/userChallenge/userChallenge.types";
export enum StartChallengeTabs {
  DESCRIPTION = "description",
  DELIVERABLES = "deliverables",
  MATERIALS = "materialcomplementar",
}

export type StartChallengeTemplateProps = {
  userChallenge: UserChallenge;
  challenge: Challenge;
  materials: Material[];
};

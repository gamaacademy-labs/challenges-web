import { UserChallenge } from "./../../../../services/userChallenge/userChallenge.types";
import { Challenge } from "../../../../services/challenges/challenges.types";

export interface ChallengeSidebarProps {
  onChange(target: any): void;
  challenge: Challenge;
  ranking: UserChallenge[];
}

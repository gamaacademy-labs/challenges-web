import { UserDeliverables } from "./../../../../services/deliverables/deliverable.types";
import { UserChallenge } from "./../../../../services/userChallenge/userChallenge.types";
import { Challenge } from "./../../../../services/challenges/challenges.types";
export type StartFooterProps = {
  challenge: Challenge;
  userChallenge: UserChallenge;
  userDeliverables: UserDeliverables[];
};

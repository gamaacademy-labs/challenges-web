
import { UserDeliverables } from '../../../../services/deliverables/deliverable.types';
import { ChallengeDeliverable } from '../../../../services/challenge/challenge.types';
import { UserChallenge } from '../../../../services/userChallenge/userChallenge.types';
export type ScreenDescriptionTabProps = {
  deliverables: ChallengeDeliverable[],
  userDeliverables:UserDeliverables[]
  refresh:()=> void
  userChallenge: UserChallenge
}
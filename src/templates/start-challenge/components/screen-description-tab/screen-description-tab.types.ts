
import { UserDeliverables } from '../../../../services/deliverables/deliverable.types';
import { ChallengeDeliverable } from '../../../../services/challenge/challenge.types';
export type ScreenDescriptionTabProps = {
  deliverables: ChallengeDeliverable[],
  userDeliverables:UserDeliverables[]
  refresh:()=> void
}
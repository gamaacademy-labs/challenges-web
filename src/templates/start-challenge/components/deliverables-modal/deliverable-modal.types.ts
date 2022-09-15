
import { UserDeliverables } from '../../../../services/deliverables/deliverable.types';
import { ChallengeDeliverable } from './../../../../services/challenge/challenge.types';
export interface  DeliverableModalProps{
  visible: boolean;
  close: () => void;
  deliverable?: ChallengeDeliverable
  userDeliverable? : UserDeliverables
}

export type Deliverable = {
  title: string;
  time?: string;
  description: string
}

export interface DeliverableListProps {
  data: Deliverable[]
}

export type DeliverableForm = {
  explanation: string
  link: string
}
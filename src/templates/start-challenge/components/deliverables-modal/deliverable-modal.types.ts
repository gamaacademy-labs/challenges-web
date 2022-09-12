export interface  DeliverableModalProps{
  visible: boolean;
  close: () => void;
}

export type Deliverable = {
  title: string;
  time?: string;
  description: string
}

export interface DeliverableListProps {
  data: Deliverable[]
}
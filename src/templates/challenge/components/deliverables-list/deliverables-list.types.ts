export type Deliverable = {
    title: string;
    time?: string;
    description: string
}

export interface DeliverableListProps {
    data: Deliverable[]
}
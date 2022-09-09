export type TabItem = {
    id: string
    title: string
}

export interface ListTabsProps {
    onChange(target: string): void
    tabs: TabItem[]
}
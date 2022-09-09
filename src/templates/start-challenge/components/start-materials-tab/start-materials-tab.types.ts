export type Materials = {
    id: string
    title: string
    type: string
    description: string
}

export interface StartMaterialsTabProps {
    materials: Materials[]
}
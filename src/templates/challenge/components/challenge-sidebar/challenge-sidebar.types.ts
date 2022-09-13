import { Challenge } from "../../../../services/challenges/challenges.types"

export interface ChallengeSidebarProps {
    onChange(target: any): void
    challenge: Challenge
}
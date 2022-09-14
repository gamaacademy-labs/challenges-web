
export type UserDeliverables = {
    id:string,
    link:string,
    explanation:string,
    userChallengeId: string,
    hallengeDeliverableId:string,
    createdAt:string,
    updatedAt:string,
    user_challenge:string
}

export type PutDeliverablesResponse = UserDeliverables[]
export type PutDeliverablesRequest = {
    link: string
    explanation: string
    challengeDeliverableId: string
}


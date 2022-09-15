export type UserDeliverables = {
    id:	string
    link:string
    explanation	:string
    userChallengeId	:string
    challengeDeliverableId:string
    createdAt:string
    updatedAt:string
}

export type PostDeliverablesResponse = UserDeliverables[]
export type PostDeliverablesRequest = {
    link:string
    explanation	:string
    challengeDeliverableId:string
}
export type PutDeliverablesRequest = {
    link:string
    explanation	:string
    userDeliverableId:string
}


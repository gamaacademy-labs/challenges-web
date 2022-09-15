import axios from "axios";
import { PostDeliverablesRequest, PostDeliverablesResponse, PutDeliverablesRequest, UserDeliverables } from "./deliverable.types";

const postDeliverable = async (data: PostDeliverablesRequest): Promise<PostDeliverablesResponse> => {
    const response = await axios.post(`https://18.231.74.183/userDeliverable/${data.challengeDeliverableId}/deliverable`, {
        link: data.link,
        explanation: data.explanation
    }, {
        params: {
            userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9"
        }
    })
    return response.data
}

const putDeliverable = async (data: PutDeliverablesRequest): Promise<UserDeliverables> => {
    const response = await axios.put(`https://18.231.74.183/userDeliverable/${data.userDeliverableId}/refresh`, {
        link: data.link,
        explanation: data.explanation
    })
    return response.data
}
const getUserDeliverables = async (userChallengeId:string): Promise<UserDeliverables[]> => {
    const response = await axios.get(`https://18.231.74.183/userDeliverables/${userChallengeId}`)
     
    return response.data
}

export {
    getUserDeliverables,
    postDeliverable, 
    putDeliverable
}
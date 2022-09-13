import axios from "axios";
import {PostDeliverablesResponse } from "./challenges.types";

const postChallenges = async (challengeDeliverableId: string): Promise< PostDeliverablesResponse > => {
    const response = await axios.post(`http://18.231.74.183/userDeliverable/${challengeDeliverableId}/deliverable`) 
    return response.data
}

export {
    postChallenges
}
import axios from "axios";
import { PostDeliverablesRequest, PostDeliverablesResponse } from "./deliverable.types";

const postDeliverable = async (data: PostDeliverablesRequest): Promise<PostDeliverablesResponse> => {
    const response = await axios.post(`http://18.231.74.183/userDeliverable/${data.challengeDeliverableId}/deliverable`, {
        link: data.link,
        explanation: data.explanation
    }, {
        params: {
            userId: "db1526a7-907f-4d47-b284-d4186e4c5c98"
        }
    })
    return response.data
}
export {
    postDeliverable
}
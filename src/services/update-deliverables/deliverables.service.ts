import axios from "axios";
import { PutDeliverablesRequest, PutDeliverablesResponse } from "./update-deliverables";

const putDeliverable = async (data: PutDeliverablesRequest): Promise<PutDeliverablesResponse> => {
    const response = await axios.put(`http://18.231.74.183/userDeliverable/${data.challengeDeliverableId}/refresh`, {
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
    putDeliverable
}
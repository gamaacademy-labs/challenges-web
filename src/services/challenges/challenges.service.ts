import axios from "axios";
import { GetChallengesResponse } from "./challenges.types";

const getChallenges = async (): Promise<GetChallengesResponse> => {
    const response = await axios.get('http://18.231.74.183/challenges') 
    return response.data
}

export {
    getChallenges
}
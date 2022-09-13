import axios from "axios";
import { GetChallengeByIdResponse } from "./challenge.types";

const getChallengeById = async (): Promise<GetChallengeByIdResponse> => {
  const response = await axios.get(
    "http://18.231.74.183/challenges/{challengeId}"
  );
  return response.data;
};

export { getChallengeById };

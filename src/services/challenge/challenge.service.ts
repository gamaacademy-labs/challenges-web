import axios from "axios";
import { Challenge } from "../challenges/challenges.types";

const getChallengeById = async (challengeId: string): Promise<Challenge> => {
  const response = await axios.get(
    `https://18.231.74.183/challenges/${challengeId}`
  );
  return response.data;
};

export { getChallengeById };

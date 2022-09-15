import axios from "axios";
import { Challenge } from "../challenges/challenges.types";

const getChallengeById = async (challengeId: string): Promise<Challenge> => {
  const response = await axios.get(
    `https://gama-challengers.com.br/challenges/${challengeId}`
  );
  return response.data;
};

export { getChallengeById };

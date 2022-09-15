import axios from "axios";
import { GetChallengesResponse, Material } from "./challenges.types";

const getChallenges = async (): Promise<GetChallengesResponse> => {
  const response = await axios.get("https://gama-challengers.com.br/challenges");
  return response.data;
};
const getMaterials = async (challengeId: string): Promise<Material[]> => {
  const response = await axios.get(
    `https://gama-challengers.com.br/materials/${challengeId}`
  );
  return response.data;
};

export { getChallenges, getMaterials };

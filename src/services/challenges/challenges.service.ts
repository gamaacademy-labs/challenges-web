import axios from "axios";
import { GetChallengesResponse, Material } from "./challenges.types";

const getChallenges = async (): Promise<GetChallengesResponse> => {
  const response = await axios.get("https://18.231.74.183/challenges");
  return response.data;
};
const getMaterials = async (challengeId: string): Promise<Material[]> => {
  const response = await axios.get(
    `https://18.231.74.183/materials/${challengeId}`
  );
  return response.data;
};

export { getChallenges, getMaterials };

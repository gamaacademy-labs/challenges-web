import axios from "axios";
import { UserChallenge } from "./userChallenge.types";

const getRankById = async (challengeId: string): Promise<UserChallenge[]> => {
  const response = await axios.get(
    `http://18.231.74.183/challenge/${challengeId}/ranking`
  );
  return response.data;
};

export { getRankById };

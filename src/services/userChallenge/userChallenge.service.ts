import axios from "axios";
import { UserChallenge } from "./userChallenge.types";

const getRankById = async (challengeId: string): Promise<UserChallenge[]> => {
  const response = await axios.get(
    `https://gama-challengers.com.br/challenge/${challengeId}/ranking`
  );
  return response.data;
};
const endChallenge = async (challengeId: string): Promise<number> => {
  const response = await axios.put(
    `https://gama-challengers.com.br/userchallenge/${challengeId}/end`,
    null,
    {
      params: {
        userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9",
      },
    }
  );
  return response.status;
};

export { getRankById, endChallenge };

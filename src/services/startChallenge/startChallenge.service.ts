import axios from "axios";
import { StartChallenge } from "./startChallenge.types";

const startChallengebyId = async (
  challengeId: string
): Promise<StartChallenge[]> => {
  const response = await axios.post(
    `https://gama-challengers.com.br/userchallenge/${challengeId}/start`,
    null,
    {
      params: {
        userId: "2ee62d21-8957-4004-a3d5-b7f8220354b9",
      },
    }
  );
  return response.data;
};

export { startChallengebyId };

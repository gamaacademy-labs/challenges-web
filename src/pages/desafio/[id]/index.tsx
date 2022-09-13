import React from "react";
import ChallengeTemplate from "../../../templates/challenge/challenge.template";
import { ChallengeProps } from "../../../templates/challenge/challenge.types";

const Challenge = ({ challengeById }): ChallengeProps => {
  return <ChallengeTemplate challengeById={challengeById} />;
};

export default Challenge;

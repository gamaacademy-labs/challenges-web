import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { getChallengeById } from "../../../services/challenge/challenge.service";
import { getMaterials } from "../../../services/challenges/challenges.service";
import { startChallengebyId } from "../../../services/startChallenge/startChallenge.service";
import StartChallengeTemplate from "../../../templates/start-challenge/start-challenge.template";
import { StartChallengeTemplateProps } from "../../../templates/start-challenge/start-challenge.types";

const Challenge = ({
  challenge,
  userChallenge,
  materials,
}: StartChallengeTemplateProps) => {
  return (
    <StartChallengeTemplate
      challenge={challenge}
      userChallenge={userChallenge}
      materials={materials}
    />
  );
};
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const challengeId = context.params?.id;

  if (!challengeId) {
    return {
      notFound: true,
    };
  }

  try {
    const userChallenge = await startChallengebyId(challengeId as string);
    const challenge = await getChallengeById(challengeId as string);
    const materials = await getMaterials(challengeId as string);
    return {
      props: {
        challenge: challenge,
        userChallenge: userChallenge,
        materials: materials,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
};
export default Challenge;

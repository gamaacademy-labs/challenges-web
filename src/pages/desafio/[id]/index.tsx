import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { getChallengeById } from "../../../services/challenge/challenge.service";
import ChallengeTemplate from "../../../templates/challenge/challenge.template";
import { ChallengeProps } from "../../../templates/challenge/challenge.types";

const Challenge = ({ challenge }: ChallengeProps) => {
  return <ChallengeTemplate challenge={challenge} />;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const challengeId = context.params?.id

  if (!challengeId) {
      return {
          notFound: true,
      };
  }

  try {
      const challenge = await getChallengeById(challengeId as string)

      return {
          props: {challenge: challenge },
      }
  } catch (err) {
      return {
          notFound: true,
      };
  }
}

export default Challenge;

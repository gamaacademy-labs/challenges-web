import { Box, Button, Typography } from "@gama-academy/smash-web";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "../../components/header";
import { Challenge } from "../../services/challenges/challenges.types";
import { ChallengesProps } from './challenges.types';

const ChallengesTemplate = ({ challenges }: ChallengesProps) => {

  const router = useRouter()

  return (
    <>
      <Header />
      <Typography fontFamily={"monospace"} align="center">
        <h1>Desafios</h1>
      </Typography>
      <Box alignment="center" margin="lg" dir="column">
        {challenges.map((challenge: Challenge) => {
          return (
            <Box
              className="hoverEffect"
              width="75vw"
              padding="4"
              borderRadius="10px"
              border="1px solid #D7DBDA"
              justifyContent="space-between"
              alignment="center"
              margin="2"
              dir="row"
              key={challenge.id}
            >
              <Typography fontFamily={"raniway"} tag="p" align="center">
                {challenge.title}
              </Typography>
              <Box>
                <Link href={`/desafio/${challenge.id}`}>
                  <Button onClick={() => {}} buttonType="button" size="1">
                    Ver desafio
                  </Button>
                </Link>
              </Box>
            </Box>
          );
        }).reverse()}
      </Box>
    </>
  );
};

export default ChallengesTemplate;

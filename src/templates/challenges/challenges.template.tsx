import { Box, Button, Typography } from "@gama-academy/smash-web";
import { Header } from "../../components/header";
import { IChallenges } from "./index";
import { ChallengesProps } from './challenges.types';

const ChallengesTemplate = ({ challenges }: ChallengesProps) => {
  return (
    <>
      <Header />
      <Typography fontFamily={"monospace"} align="center">
        <h1>Desafios</h1>
      </Typography>
      <Box alignment="center" margin="lg" dir="column">
        {challenges.map((challenge: IChallenges) => {
          return (
            <Box
              className="hoverEffect"
              width="75vw"
              padding="4"
              borderRadius="10px"
              border="1px solid #D7DBDA"
              justifyContent="space-between"
              alignment="center"
              margin="4"
              dir="row"
              key={challenge.id}
            >
              <Typography fontFamily={"raniway"} tag="p" align="center">
                {challenge.title}
              </Typography>
              <Box>
                <Button onClick={() => {}} buttonType="button" size="1">
                  Iniciar desafio
                </Button>
              </Box>
            </Box>
          );
        }).reverse()}
      </Box>
    </>
  );
};

export default ChallengesTemplate;

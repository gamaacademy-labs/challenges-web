import React from "react";
import { Box, Card, Icon, Typography } from "@gama-academy/smash-web";
import { StartChallengeTemplateProps } from "../../start-challenge.types";

const StartDescriptionTab = ({ challenge }: StartChallengeTemplateProps) => {
  return (
    <Card shadowBehavior="never" mt="4">
      <Box p="3">
        <Box dir="row">
          <Icon.Material name="style" size={24} color="secondary.4" />
          <Typography ml="2" fontWeight="semi_bold">
            Instruções gerais
          </Typography>
        </Box>
        <Typography type="description" mt="3">
          {challenge.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default StartDescriptionTab;

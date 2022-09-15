import React from "react";
import Image from "next/image";

import { Box, Typography } from "@gama-academy/smash-web";

import { useDimensions } from "../../../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../../../utils/responsive";

import StartMaterialsTab from "../start-materials-tab/start-materials-tab.comp";
import Feedback from "../feedback/feedback.comp";
import { StartSideBarChallengeTemplateProps } from "./start-sidebar.types";

const StartSidebar = ({
  challenge,
  materials,
}: StartSideBarChallengeTemplateProps) => {
  const { width } = useDimensions();

  return (
    <Box
      width={width > MOBILE_BREAKPOINT ? 300 : "100%"}
      margin="2"
      padding="2"
    >
      <Box
        borderColor="primary.3"
        borderStyle="solid"
        borderWidth={8}
        mb="4"
        borderRadius={8}
      >
        <Image src="/img/image.png" width={300} alt="Logo" height={200} />
      </Box>

      <Box pb="5">
        <Feedback />
      </Box>

      {width <= MOBILE_BREAKPOINT && (
        <Box alignItems="flex-start">
          <Box dir="row">
            <Box
              width="24px"
              height="24px"
              borderRadius="4"
              justifyContent="center"
              alignItems="center"
              backgroundColor="brand.primary"
            >
              <Image src="/img/hipsterIcon.png" width="16" height="5" />
            </Box>
            <Typography ml="2" type="title">
              {challenge.description}
            </Typography>
          </Box>
        </Box>
      )}
      {width > MOBILE_BREAKPOINT && (
        <StartMaterialsTab materials={materials || []} />
      )}
    </Box>
  );
};

export default StartSidebar;

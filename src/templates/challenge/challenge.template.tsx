import React, { useState } from "react";

import { Box } from "@gama-academy/smash-web";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import DeliverablesList from "./components/deliverables-list/deliverables-list.comp";
import ChallengeSidebar from "./components/challenge-sidebar/challenge-sidebar.comp";
import DescriptionTab from "./components/description-tab/description-tab.comp";
import { useDimensions } from "../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../utils/responsive";
import { ChallengeProps, ChallengeTabs } from "./challenge.types";
import { RankingList } from "./components/ranking-list/ranking-list.comp";

const ChallengeTemplate = ({ challenge }: ChallengeProps) => {

  const rankingMock = [
    {
      name: "Morpheus",
      value: 100,
    },
    {
      name: "Lauras",
      value: 10,
    },
  ];

  const [selectedTab, setSelectedTab] = useState<ChallengeTabs>(
    ChallengeTabs.DESCRIPTION
  );

  const { width } = useDimensions();

  const deliverablesMock = [
    {
      title: "{{Nome do entregável}}",
      time: "Reserve 2 horas",
      description:
        "Nulla scelerisque libero vitae ex convallis congue. Praesent ut dignissim mi. Quisque lobortis pellentesque magna id malesuada. Proin sed urna porttitor, dapibus purus quis, malesuada nulla",
    },
    {
      title: "{{Nome do entregável 2}}",
      time: "Reserve 2 horas",
      description:
        "Nulla scelerisque libero vitae ex convallis congue. Praesent ut dignissim mi. Quisque lobortis pellentesque magna id malesuada. Proin sed urna porttitor, dapibus purus quis, malesuada nulla",
    },
  ];
  return (
    <>
      <Header />
      <Box pb="4" minHeight="100vh">
        <Box
          dir="row"
          mb="6"
          justifyContent="center"
          flexWrap="wrap-reverse"
          width="100%"
        >
          <Box width="858px" mr={width <= MOBILE_BREAKPOINT ? 0 : 5}>
            {(selectedTab === ChallengeTabs.DESCRIPTION ||
              width > MOBILE_BREAKPOINT) && <DescriptionTab challenge={challenge} />}
            {selectedTab === ChallengeTabs.DELIVERABLES &&
              width <= MOBILE_BREAKPOINT && (
                <DeliverablesList data={deliverablesMock} />
              )}
            {selectedTab === ChallengeTabs.RANKING &&
              width <= MOBILE_BREAKPOINT && <RankingList data={rankingMock} />}
            {width > MOBILE_BREAKPOINT && (
              <DeliverablesList data={deliverablesMock} />
            )}
          </Box>
          <ChallengeSidebar onChange={setSelectedTab} challenge={challenge} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ChallengeTemplate;

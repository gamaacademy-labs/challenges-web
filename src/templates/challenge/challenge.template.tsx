import React, { useEffect, useState } from "react";

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
import { UserChallenge } from "../../services/userChallenge/userChallenge.types";
import { getRankById } from "../../services/userChallenge/userChallenge.service";

const ChallengeTemplate = ({ challenge }: ChallengeProps) => {
  const [selectedTab, setSelectedTab] = useState<ChallengeTabs>(
    ChallengeTabs.DESCRIPTION
  );

  const [ranking, setRanking] = useState<UserChallenge[]>([]);

  const getChallengeRaking = async () => {
    const newRanking = await getRankById(challenge.id);
    setRanking(newRanking);
    console.log(newRanking);
  };

  useEffect(() => {
    getChallengeRaking();
  }, []);

  const { width } = useDimensions();

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
              width > MOBILE_BREAKPOINT) && (
              <DescriptionTab challenge={challenge} />
            )}
            {selectedTab === ChallengeTabs.DELIVERABLES &&
              width <= MOBILE_BREAKPOINT && (
                <DeliverablesList
                  deliverables={challenge.challenge_deliverables || []}
                />
              )}
            {selectedTab === ChallengeTabs.RANKING &&
              width <= MOBILE_BREAKPOINT && <RankingList ranking={ranking} />}
            {width > MOBILE_BREAKPOINT && (
              <DeliverablesList
                deliverables={challenge.challenge_deliverables || []}
              />
            )}
          </Box>
          <ChallengeSidebar
            onChange={setSelectedTab}
            challenge={challenge}
            ranking={ranking}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ChallengeTemplate;

import React, { useEffect, useState } from "react";

import { Box, Icon, Tooltip, Typography } from "@gama-academy/smash-web";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useDimensions } from "../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../utils/responsive";
import Image from "next/image";
import ListTabs from "../../components/list-tabs/list-tabs.comp";
import { TabItem } from "../../components/list-tabs";
import StartDescriptionTab from "./components/start-description-tab/start-description-tab.comp";
import StartSidebar from "./components/start-sidebar/start-sidebar.comp";
import {
  StartChallengeTabs,
  StartChallengeTemplateProps,
} from "./start-challenge.types";
import StartFooter from "./components/start-footer/start-footer.comp";
import ScreenDescriptionTab from "./components/screen-description-tab/screen-description-tab.comp";
import StartMaterialsTab from "./components/start-materials-tab/start-materials-tab.comp";
import { UserDeliverables } from "../../services/deliverables/deliverable.types";
import { getUserDeliverables } from "../../services/deliverables/deliverables.service";

const StartChallengeTemplate = ({
  challenge,
  userChallenge,
  materials,
}: StartChallengeTemplateProps) => {
  const [selectedTab, setSelectedTab] = useState<StartChallengeTabs>(
    StartChallengeTabs.DESCRIPTION
  );

  const [userDeliverables, setUserDeliverables] =
    useState<UserDeliverables[]>();

  const { width } = useDimensions();

  const isMobile = width <= MOBILE_BREAKPOINT;

  const tabs: TabItem[] = [
    {
      id: "description",
      title: "Instruções gerais",
    },
    {
      id: "deliverables",
      title: "Entregáveis",
    },
  ];

  const loadUserDeliverables = async () => {
    let newUserDeliverables = await getUserDeliverables(userChallenge.id);
    setUserDeliverables(newUserDeliverables);
  };
  useEffect(() => {
    loadUserDeliverables();
  }, []);
  return (
    <>
      <Header />
      <Box pb="10" minHeight="100vh">
        <Box
          dir="row"
          mb="6"
          justifyContent="center"
          flexWrap="wrap-reverse"
          width="100%"
        >
          <Box width="858px" px="4" mr={width <= MOBILE_BREAKPOINT ? 0 : 5}>
            {isMobile && (
              <Box
                borderColor="primary.3"
                borderStyle="solid"
                borderWidth={8}
                mb="4"
                borderRadius={8}
              >
                <Image
                  src="/img/image.png"
                  width={300}
                  alt="Logo"
                  height={200}
                />
              </Box>
            )}
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
            {isMobile && (
              <Box alignItems="flex-start" justifyContent="center" mt="2">
                <Tooltip
                  alignment="start"
                  message={
                    <Typography
                      color="greyDark.7"
                      fontSize="2"
                      fontWeight="medium"
                    >
                      Avaliação média.
                    </Typography>
                  }
                  position="top"
                >
                  <Box dir="row" alignItems="center">
                    <Icon.Material name="star" size={24} color="yellow.4" />
                    <Icon.Material name="star" size={24} color="yellow.4" />
                    <Icon.Material name="star" size={24} color="yellow.4" />
                    <Icon.Material
                      name="star_half"
                      size={24}
                      color="yellow.4"
                    />
                    <Icon.Material
                      name="star_outline"
                      size={24}
                      color="yellow.4"
                    />
                    <Typography ml="1">(461)</Typography>
                  </Box>
                </Tooltip>
              </Box>
            )}
            <Box mt="4">
              <ListTabs
                tabs={
                  isMobile
                    ? [
                        ...tabs,
                        {
                          title: "Material Complementar",
                          id: "materialcomplementar",
                        },
                      ]
                    : tabs
                }
                onChange={(target) =>
                  setSelectedTab(target as StartChallengeTabs)
                }
              />
            </Box>
            {selectedTab === StartChallengeTabs.MATERIALS && isMobile && (
              <StartMaterialsTab materials={materials} />
            )}
            {selectedTab === StartChallengeTabs.DESCRIPTION && (
              <StartDescriptionTab
                challenge={challenge}
                userChallenge={userChallenge}
                materials={materials}
              />
            )}
            {selectedTab === StartChallengeTabs.DELIVERABLES && (
              <ScreenDescriptionTab
                userChallenge={userChallenge}
                refresh={loadUserDeliverables}
                userDeliverables={userDeliverables || []}
                deliverables={challenge.challenge_deliverables || []}
              />
            )}
          </Box>
          {!isMobile && (
            <StartSidebar materials={materials} challenge={challenge} />
          )}
        </Box>
      </Box>
      <StartFooter
        challenge={challenge}
        userChallenge={userChallenge}
        userDeliverables={userDeliverables || []}
      />
    </>
  );
};

export default StartChallengeTemplate;

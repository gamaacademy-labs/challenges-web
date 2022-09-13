
import React, { useState } from "react";

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
import { StartChallengeTabs } from "./start-challenge.types";
import StartFooter from "./components/start-footer/start-footer.comp";
import ScreenDescriptionTab from "./components/screen-description-tab/screen-description-tab.comp";

const StartChallengeTemplate = () => {
  const [selectedTab, setSelectedTab] = useState<StartChallengeTabs>(
    StartChallengeTabs.DESCRIPTION
  );

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
                Quem tem dados é rei!
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
                tabs={tabs}
                onChange={(target) =>
                  setSelectedTab(target as StartChallengeTabs)
                }
              />
            </Box>

            {selectedTab === StartChallengeTabs.DESCRIPTION && (
              <StartDescriptionTab />
            ) ? (
              <StartDescriptionTab />
            ) : (
              <ScreenDescriptionTab data={deliverablesMock} />
            )}
          </Box>
          {!isMobile && <StartSidebar />}
        </Box>
      </Box>
      <StartFooter />
    </>
  );
};

export default StartChallengeTemplate;

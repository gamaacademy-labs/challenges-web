import React from "react";
import Image from "next/image";

import {
  Box,
  MaterialIcon,
  Tooltip,
  Typography,
} from "@gama-academy/smash-web";

import { useDimensions } from "../../../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../../../utils/responsive";

import { RankingList } from "../ranking-list/ranking-list.comp";
import ListTabs from "../../../../components/list-tabs/list-tabs.comp";
import { ChallengeSidebarProps } from "./challenge-sidebar.types";

const ChallengeSidebar = (props: ChallengeSidebarProps) => {
  const { width } = useDimensions();

  const tabs = [
    {
      id: "description",
      title: "Descricão",
    },
    {
      id: "deliverables",
      title: "Entregáveis",
    },
    {
      id: "ranking",
      title: "Ranking",
    },
  ];

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
              {props.challenge.title}
            </Typography>
          </Box>
          <Tooltip
            alignment="start"
            message={
              <Typography color="greyDark.7" fontSize="2" fontWeight="medium">
                Avaliação média.
              </Typography>
            }
            position="top"
          >
            <Box dir="row" alignItems="center" mt="2">
              <MaterialIcon name="star" size={24} color="yellow.4" />
              <MaterialIcon name="star" size={24} color="yellow.4" />
              <MaterialIcon name="star" size={24} color="yellow.4" />
              <MaterialIcon name="star_half" size={24} color="yellow.4" />
              <MaterialIcon name="star_outline" size={24} color="yellow.4" />
              <Typography ml="1">(461)</Typography>
            </Box>
          </Tooltip>
          <Box mt="3">
            <ListTabs
              tabs={tabs}
              onChange={(target) => props.onChange(target)}
            />
          </Box>
        </Box>
      )}
      {width > MOBILE_BREAKPOINT && <RankingList ranking={props.ranking} />}
    </Box>
  );
};

export default ChallengeSidebar;

import React from "react";

import { Box, Card, Tabs, Typography } from "@gama-academy/smash-web";
import * as Styles from "./list-tabs.styles";
import { ListTabsProps } from "./list-tabs.types";

const ListTabs = (props: ListTabsProps) => {
  function renderTabItem(title: string, active: boolean) {
    return (
      <Styles.TabItemContainer active={active} px="4" py="1">
        <Typography fontSize="2" color={active ? "white" : "greyDark.7"}>
          {title}
        </Typography>
      </Styles.TabItemContainer>
    );
  }

  return (
    <Tabs default={props.tabs[0].id}>
      <Box>
        <Card
          shadowBehavior="never"
          borderRadius="4"
          padding="none"
          py="1"
          px="1"
        >
          <Tabs.Bar thickness={0} color="secondary.4">
            {props.tabs.map((tab, index) => (
              <Tabs.Item
                onClick={() => props.onChange(tab.id)}
                key={tab.id + index}
                id={tab.id}
                content={<></>}
                renderTab={({ active }) => renderTabItem(tab.title, !!active)}
              />
            ))}
          </Tabs.Bar>
        </Card>
      </Box>
    </Tabs>
  );
};

export default ListTabs;

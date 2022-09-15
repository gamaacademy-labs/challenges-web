import {
  Box,
  Card,
  Icon,
  MaterialIcon,
  Typography,
} from "@gama-academy/smash-web";
import React from "react";
import { StartMaterialsTabProps } from "./start-materials-tab.types";

const StartMaterialsTab = (props: StartMaterialsTabProps) => {
  return (
    <Box px="2">
      <Typography fontWeight="bold" color="brand.secondary">
        MATERIAL COMPLEMENTAR
      </Typography>
      {props.materials.map((material, index) => (
        <Card
          key={index.toString()}
          backgroundColor="white"
          mt={3}
          shadowBehavior="never"
        >
          <Box
            dir="row"
            justifyContent="space-between"
            alignItems="center"
            px="2"
          >
            <Box dir="row" alignItems="center" justifyContent="space-around">
              <MaterialIcon
                name={
                  material.type === "file" ? "smart_display" : "play_circle"
                }
                mr="1"
                color="secondary.4"
              />
              <Box ml="2">
                <Typography fontWeight="bold">{material.title}</Typography>
                <Typography
                  color="secondary.4"
                  fontSize="1"
                  fontWeight="semi_bold"
                >
                  {material.title}
                </Typography>
              </Box>
            </Box>
            <MaterialIcon
              size={18}
              name={material.type === "file" ? "file_download" : "open_in_new"}
            />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default StartMaterialsTab;

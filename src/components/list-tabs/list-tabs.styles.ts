import { Box, getThemeColor } from "@gama-academy/smash-web";
import styled from "styled-components";

export const TabItemContainer = styled(Box)<{ active: boolean }>`
  margin: 0px 4px;
  background-color: ${({ active }) =>
    active ? getThemeColor("secondary.4") : "transparent"};
  border-width: 1px;
  border-color: ${({ active }) =>
    active ? getThemeColor("grey.3") : "transparent"};
  border-radius: 20px;
`;

import React from "react";
import { Box, Button, MaterialIcon, Typography } from "@gama-academy/smash-web";

import * as Styles from "./footer.styles";

import { MOBILE_BREAKPOINT } from "../../utils/responsive";
import { useDimensions } from "../../hooks/layout/use-dimensions.hook";
import Link from "next/link";
import { useRouter } from "next/router";
import { FooterProps } from "./footer.types";

export const Footer = (props: FooterProps) => {
  const { width } = useDimensions();

  const router = useRouter();

  return (
    <Styles.Container
      backgroundColor="secondary.4"
      py="2"
      px="4"
      width="100%"
      justifyContent="flex-end"
      dir="row"
    >
      <Link href={`${router.query.id}/iniciar`}>
        <Button
          disabled={!props.showButton}
          color="white"
          onClick={() => {}}
          fluid={width <= MOBILE_BREAKPOINT ? true : false}
        >
          <Typography mr="1" color="greyDark.4" fontWeight="bold">
            Iniciar desafio
          </Typography>
          <MaterialIcon
            name="play_circle_filled"
            shape="none"
            color="primary.3"
            type="round"
          />
        </Button>
      </Link>
    </Styles.Container>
  );
};

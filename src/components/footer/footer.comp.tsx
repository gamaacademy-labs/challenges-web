import React from 'react';
import { Box, Button, MaterialIcon, Typography } from '@gama-academy/smash-web';

import * as Styles from './footer.styles'

import { MOBILE_BREAKPOINT } from '../../utils/responsive';
import { useDimensions } from '../../hooks/layout/use-dimensions.hook';

export const Footer = () => {
  const { width } = useDimensions()

  return (  
    <Styles.Container
      backgroundColor="secondary.4"
      py="2"
      px="4"
      width="100%"
      justifyContent="flex-end"
      dir="row"
    >
      <Button
        color="white"
        onClick={() => {}}
        fluid={width <= MOBILE_BREAKPOINT ? true : false}
      >
        <Typography mr="1" color="greyDark.4" fontWeight="bold">Iniciar desafio</Typography>
        <MaterialIcon name="play_circle_filled" shape="none" color="primary.3" type="round"/>
      </Button>
    </Styles.Container>
  );
}
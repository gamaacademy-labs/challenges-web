import React from 'react'
import Image from 'next/image'
import { Box, Button, Icon, Modal, ModalBody, Typography } from '@gama-academy/smash-web'
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook'
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive'
import {CongratulationProps } from './congratulation-modaltypes'



export const CongratulationModal = (props: CongratulationProps) => {
  const nomeDodesafio = "{{nome do desafio}}"
  const { width } = useDimensions()

  return (
    <Modal size="400px" open={props.visible} onClose={() => props.close()}>
      <ModalBody padding={width < MOBILE_BREAKPOINT ? 'lg' : 'xxl'}>
        <Box alignment="center" justifyContent="center">
          <Box dir="row" ml="10" justifyContent="center">
            <Image src="/img/Illustration-of-conglaturation.png" width="180" alt="ilustracao-modal" height="100" />
            <Box position="relative" left="3rem" top="-1rem">
              <Button
                color="greyDark.1"
                onClick={() => props.close()}
                disableHoverEffect
                variant="ghost"
              >
                <Icon.Material name="close" size={24} />
              </Button>
            </Box>
          </Box>
          <Typography type="title" px="2" mt="3" mb="2" align="center">
            Desafio finalizado com sucesso!
          </Typography>
          <Typography align="center" mt="2" type='tips'>
            Parabéns, desafio {nomeDodesafio} concluido.
          </Typography>
          <Button
            mt="5"
            color="violet.4"
            onClick={() => props.close()}
            fluid
            variant="filled"
          >
            Acessar Gabarito
          </Button>
        </Box>
      </ModalBody>
    </Modal>
  )
}
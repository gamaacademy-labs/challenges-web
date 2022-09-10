import Image from 'next/image'
import { Box, Button, Icon, Modal, ModalBody, Typography } from '@gama-academy/smash-web'
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook'
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive'
import { StartModalProps } from './start-orientation-modal.types'


export const StartOrientationModal = (props: StartModalProps) => {

  const { width } = useDimensions()

  return (
    <Modal size="400px" open={props.visible} onClose={() => props.close()}>
      <ModalBody padding={width < MOBILE_BREAKPOINT ? 'lg' : 'xxl'}>
        <Box alignment="center" justifyContent="center">
          <Box dir="row" ml="10" justifyContent="center">
            <Image src="/img/ilustracao-modal.png" width="150" alt="ilustracao-modal" height="135" />
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
          <Typography type="title" px="2" mt="2" mb="2" align="center">
            Adicione os entregáveis
          </Typography>
          <Typography align="center" mt="2">
            Para finalizar o desafio você precisa adicionar todos os entregáveis.
          </Typography>
          <Button
            mt="5"
            color="violet.4"
            onClick={() => props.close()}
            fluid
            variant="filled"
          >
            Entendi
          </Button>
        </Box>
      </ModalBody>
    </Modal>
  )
}
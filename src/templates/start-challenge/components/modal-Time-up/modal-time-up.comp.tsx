import Image from 'next/image'
import { Box, Button, Icon, Modal, ModalBody, Typography } from '@gama-academy/smash-web'
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook'
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive'
import { StartModalProps } from './modal-time-up.types'


export const TimeUpModal = (props: StartModalProps) => {

  const { width } = useDimensions()
  const nomeDesafio = "{{Nome do desafio}}"
  return (
    <Modal size="400px" open={props.visible} onClose={() => props.close()}>
      <ModalBody padding={width < MOBILE_BREAKPOINT ? 'lg' : 'xxl'}>
        <Box alignment="center" justifyContent="center">
          <Box dir="row" ml="10" justifyContent="center">
            <Image src="/img/image-desafio-finalizado.png" width="180" alt="ilustracao-modal" height="130" />
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
            Tempo esgotado
          </Typography>
          <Typography align="center" mt="2" type='tips'>
            O desafio <b> {nomeDesafio} </b>
            ficou disponível do dia <b> 01/01/2022 </b>, teve duração de 7 dias e encerrou às <b> 23:59 do dia 07/01/2022. </b>
          </Typography>
          <Typography align="center" mt="2" type='tips'>

            Mas você pode fazer a atividade e comparar com o gabarito do desafio que já está disponível!
          </Typography>
          <Button
            mt="5"
            color="primary.3"
            onClick={() => props.close()}
            fluid
            variant="filled"
          >
            Entendi, vamos lá!
          </Button>
        </Box>
      </ModalBody>
    </Modal>
  )
}
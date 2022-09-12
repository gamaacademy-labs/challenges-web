import { Box, Button, Icon, Input, MaterialIcon, Modal, ModalBody, Textarea, Toast, Typography } from '@gama-academy/smash-web'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook'
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive'
import { DeliverableModalProps } from './deliverable-modal.types'
import { useState } from 'react';



export const DeliverableModal = (props: DeliverableModalProps) => {

  const [description, setDescription] = useState("")

  const { width } = useDimensions()

  const deliverablesMock = [
    {
      title: "Nome do entregável",
      time: "Reserve 2 horas",
      description: "Uma planilha de dados com os principais KPIs do negócio escolhido. Lembre-se, as planilhas também precisam ser claras e objetivas pois é a partir delas que serão tomadas as decisões estratégicas. Coloque os conteúdos relevantes em destaque e se atente também ao design, isso vai garantir o seu uso intuitivo e agradável."
    },
  ]

  return (
    <Modal size="800px" open={props.visible} onClose={() => props.close()}>
      <ModalBody padding={width < MOBILE_BREAKPOINT ? 'lg' : 'xxl'}>
        <Box >
          {deliverablesMock.map((deliverable, index) => (
            <Box
              key={index.toString()}
              border="none"
            >
              <Box
                dir="row"
                justifyContent="space-between"
              >
                <Box
                  dir={width <= MOBILE_BREAKPOINT ? "column" : "row"}
                  alignItems={width <= MOBILE_BREAKPOINT ? "flex-start" : "center"}>
                  <Box
                    borderRadius={24}
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                    width={24}
                    height={24}
                    mr={1}
                    backgroundColor="secondary.1"
                  >
                    <MaterialIcon
                      name="task"
                      size={20}
                      color="brand.secondary"
                    />
                  </Box >
                  <Typography type="title">{deliverable.title}</Typography>
                  <Box
                    dir="row"
                    ml={width <= MOBILE_BREAKPOINT ? 0 : 4}
                    mt={width <= MOBILE_BREAKPOINT ? 3 : 0}
                    backgroundColor="grey.1"
                    borderRadius="1"
                    padding={1}
                    alignItems="center"
                  >
                    <MaterialIcon
                      name="schedule"
                      size={20}
                      color="brand.secondary"
                    />
                    <Typography type="tips" ml="1">{deliverable.time}</Typography>
                  </Box>
                </Box>

                <Button
                  pt="0"

                  pr="0" pb="3"
                  color="greyDark.1"
                  onClick={() => props.close()}
                  disableHoverEffect
                  variant="ghost"
                >
                  <Icon.Material name="close" size={24} />
                </Button>


              </Box>
              <Box mt="3">
                <Typography mb="2" type="description">{deliverable.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

          <Typography type="title" px="2" mt="2" mb="2">
            Defesa
          </Typography>
          <Typography mt="2" mb="3">
            Em poucas palavras, conte como você resolveu o desafio e as decisões que tomou:
          </Typography>
          <Textarea
            // value={description}
            fluid
            name="textarea"
            placeholder="Escreva aqui"
            mt="2" mb="3"
          // onChangeValue={()=>{setDescription} }
          />
     
          <Typography mt="3" mb="3">
            Ante de entregar certifique-se de que o link está com acesso público.
          </Typography>
    
        <Input
          mb="3"
          name="input-story"
          onChangeValue={() => { }}
          placeholder="Insira aqui o link"
          startAdornment={<Icon.Material name="link" size={24} color="secondary.4" />} />
        <Box justifyContent="flex-end" dir={width <= MOBILE_BREAKPOINT ? "column" : "row"} >
          <Button
            mt="3"
            fluid={width <= MOBILE_BREAKPOINT ? true : false}
            color="secondary.4"
            onClick={() => props.close()}
            size="2"
            variant="outline"
            mr="4"
          >
            Cancelar
          </Button>
          <Box mt="3">
            <Button
             buttonType="submit"
              fluid={width <= MOBILE_BREAKPOINT ? true : false}
              color="violet.4"
              onClick={()=>{}}
              size="2"
              variant="filled"
            >
              Salvar entregável

            </Button>    
     
          </Box>
        </Box>
    </ModalBody>
    </Modal >
  )
}

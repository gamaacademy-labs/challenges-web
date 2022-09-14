import React, { useState } from "react";
import {
  Box,
  Button,
  Icon,
  Input,
  MaterialIcon,
  Modal,
  ModalBody,
  Textarea,
  Typography,
} from "@gama-academy/smash-web";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useDimensions } from "../../../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../../../utils/responsive";
import {
  DeliverableForm,
  DeliverableModalProps,
} from "./deliverable-modal.types";
import { postDeliverable } from "../../../../services/deliverables/deliverables.service";

export const DeliverableModal = (props: DeliverableModalProps) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const { control, handleSubmit, trigger, formState } =
    useForm<DeliverableForm>();

  const { width } = useDimensions();

  const submitForm: SubmitHandler<DeliverableForm> = async (
    data: DeliverableForm
  ) => {
    try {
      setError(null);
      setLoading(true);
      await postDeliverable({
        link: data.link,
        explanation: data.explanation,
        challengeDeliverableId: "28a6605a-42dd-4ba2-a948-4226035ccc99",
      });
      props.close();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

  };

  return (
    <Modal size="800px" open={props.visible} onClose={() => props.close()}>
      <ModalBody padding={width < MOBILE_BREAKPOINT ? "lg" : "xxl"}>
        <Box>
          <Box border="none">
            <Box dir="row" justifyContent="space-between">
              <Box
                dir={width <= MOBILE_BREAKPOINT ? "column" : "row"}
                alignItems={
                  width <= MOBILE_BREAKPOINT ? "flex-start" : "center"
                }
              >
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
                  <MaterialIcon name="task" size={20} color="brand.secondary" />
                </Box>
                <Typography type="title">Nome do entregável</Typography>
           
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
                  <Typography type="tips" ml="1">
                    Reserve 2 horas
                  </Typography>
                </Box>
              </Box>

              <Button
                pt="0"
                pr="0"
                pb="3"
                color="greyDark.1"
                onClick={() => props.close()}
                disableHoverEffect
                variant="ghost"
              >
                <Icon.Material name="close" size={24} />
              </Button>
            </Box>
            <Box mt="3">
                   {error && <Typography color="red.4">{error}</Typography>}
              <Typography mb="2" type="description">
                Uma planilha de dados com os principais KPIs do negócio
                escolhido. Lembre-se, as planilhas também precisam ser claras e
                objetivas pois é a partir delas que serão tomadas as decisões
                estratégicas. Coloque os conteúdos relevantes em destaque e se
                atente também ao design, isso vai garantir o seu uso intuitivo e
                agradável.
              </Typography>
            </Box>
          </Box>
        </Box>
        <form onSubmit={handleSubmit(submitForm)}>
          <Typography type="title" px="2" mt="2" mb="2">
            Defesa
          </Typography>
          <Typography mt="2" mb="3">
            Em poucas palavras, conte como você resolveu o desafio e as decisões
            que tomou:
          </Typography>
          <Controller
            control={control}
            name="explanation"
            rules={{
              maxLength: {
                value: 3000,
                message: "O texto deve ter no máximo 3000 caracteres",
              },
              minLength: {
                value: 100,
                message:
                  "Este campo deve ter mo mínimo deve ter no 100  caracteres",
              },
              required: {
                value: true,
                message: "O campo de defesa é obrigatório",
              },
            }}
            render={({ field }) => (
              <Textarea
                fluid
                placeholder="Escreva aqui"
                mt="2"
                mb="3"
                danger={!!formState.errors.explanation}
                helperText={formState.errors.explanation?.message}
                {...field}
              />
            )}
          />
          <Typography mt="3" mb="3">
            Ante de entregar certifique-se de que o link está com acesso
            público.
          </Typography>

          <Controller
            control={control}
            name="link"
            rules={{
              required: {
                value: true,
                message: "O campo de link é obrigatório",
              },
            }}
            render={({ field }) => (
              <Input
                mb="3"
                placeholder="Insira aqui o link"
                startAdornment={
                  <Icon.Material name="link" size={24} color="secondary.4" />
                }
                danger={!!formState.errors.link}
                helperText={formState.errors.link?.message}
                {...field}
              />
            )}
          />
          <Box
            justifyContent="flex-end"
            dir={width <= MOBILE_BREAKPOINT ? "column" : "row"}
          >
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
                onClick={() => trigger()}
                size="2"
                variant="filled"
              >
                Salvar entregável
              </Button>
            </Box>
          </Box>
        </form>
      </ModalBody>
    </Modal>
  );
};

import React, { useEffect, useState } from "react";
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
import { postDeliverable, putDeliverable } from "../../../../services/deliverables/deliverables.service";

export const DeliverableModal = (props: DeliverableModalProps) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const { control, handleSubmit, trigger, formState, setValue } =
    useForm<DeliverableForm>();

  const { width } = useDimensions();

  const submitForm: SubmitHandler<DeliverableForm> = async (
    data: DeliverableForm
  ) => {
    if(props.userChallenge.finishedAt) return
    try {
      setError(null);
      setLoading(true);
      if(props.userDeliverable){
        await putDeliverable({
          link: data.link,
          explanation: data.explanation,
         userDeliverableId: props.userDeliverable?.id || "",
        })
      }else {
        await postDeliverable({
          link: data.link,
          explanation: data.explanation,
          challengeDeliverableId: props.deliverable?.id || "",
        });

      }
     
      props.close();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setValue("explanation", props.userDeliverable?.explanation || "")
    setValue("link", props.userDeliverable?.link || "")
  }, [props.userDeliverable])

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
                <Typography type="title">{props.deliverable?.title}</Typography>

                <Box
                dir="row"
                ml={width <= MOBILE_BREAKPOINT ? 0 : 4}
                mt={width <= MOBILE_BREAKPOINT ? 3 : 0}
                backgroundColor={props.userDeliverable ? "green.4" : "grey.1"}
                borderRadius="1"
                padding={1}
                alignItems="center"
              >
                {!props.userDeliverable  && (
                  <MaterialIcon name="schedule" size={20} color="brand.secondary" />
                )}
                <Typography type="tips" ml="1">
                  {props.userDeliverable  ? " ✓ Salvo" : `Reserve ${String(props.deliverable?.averageTime)} minutos`}
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
                {props.deliverable?.description}
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
            {!props.userChallenge.finishedAt && (
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
            )}
          </Box>
        </form>
      </ModalBody>
    </Modal>
  );
};

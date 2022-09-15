import {
  Box,
  Button,
  Card,
  MaterialIcon,
  Typography,
} from "@gama-academy/smash-web";
import { useState } from "react";
import { useDimensions } from "../../../../hooks/layout/use-dimensions.hook";
import { ChallengeDeliverable } from '../../../../services/challenge/challenge.types';
import { UserDeliverables } from '../../../../services/deliverables/deliverable.types';
import { MOBILE_BREAKPOINT } from "../../../../utils/responsive";
import { DeliverableModal } from "../deliverables-modal/deliverable-modal-comp";
import { ScreenDescriptionTabProps } from './screen-description-tab.types';

const DeliverablesList = ({ deliverables, userDeliverables, refresh, userChallenge }: ScreenDescriptionTabProps) => {
  const { width } = useDimensions();
  const [selectDeliverable, setSelectDeliverable] = useState<ChallengeDeliverable>()
  const [selectExist, setSelectExist] = useState<UserDeliverables>()
  const [deliverableModalModalVisible, setDeliverableModalVisible] =
    useState(false);

  return (
    <Box px="2">
      {deliverables.map((deliverable) => {
        let exist = userDeliverables.find(userDeliverable => deliverable.id === userDeliverable.challengeDeliverableId)
        return (
          <Card shadowBehavior="never" padding={0} mt={3} key={deliverable.id}>
            <Box
              padding="5"
              dir={width <= MOBILE_BREAKPOINT ? "column" : "row"}
              alignItems={width <= MOBILE_BREAKPOINT ? "flex-start" : "center"}
            >
              <Box dir="row" alignItems="center">
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
                <Typography type="title">{deliverable.title}</Typography>
              </Box>
              <Box
                dir="row"
                ml={width <= MOBILE_BREAKPOINT ? 0 : 4}
                mt={width <= MOBILE_BREAKPOINT ? 3 : 0}
                backgroundColor={exist ? "green.4" : "grey.1"}
                borderRadius="1"
                padding={1}
                alignItems="center"
              >
                {!exist && (
                  <MaterialIcon name="schedule" size={20} color="brand.secondary" />
                )}
                <Typography type="tips" ml="1">
                  {exist ? " ✓ Salvo" : `Reserve ${String(deliverable.averageTime)} minutos`}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography type="description" padding="5" pt="1">
                {deliverable.description}
              </Typography>
              <Box
                dir={width <= MOBILE_BREAKPOINT ? "column" : "row"}
                justifyContent="space-between"
                borderTop="1px solid #D7DBDA"
                padding={2}
              >
                <Typography
                  mr={width <= MOBILE_BREAKPOINT ? 5 : 0}
                  align="center"
                  ml="4"
                  fontWeight="semi_bold"
                  mt="1"
                  pt="1"
                  fontSize="2"
                >
                  {exist ? `Salvo em ${new Date(exist.updatedAt).toLocaleDateString()}` : "Defenda e adicione o link de sua entrega"}

                </Typography>
                <Box />

                <Box
                  mt={width <= MOBILE_BREAKPOINT ? 2 : 0}
                  ml={width <= MOBILE_BREAKPOINT ? 12 : 0}
                >
                  <Button
                    fluid
                    ml={width <= MOBILE_BREAKPOINT ? -7 : 0}
                    size="1"
                    disableHoverEffect
                    color="brand.secondary"
                    onClick={() => {
                      setDeliverableModalVisible(true)
                      setSelectDeliverable(deliverable)
                      setSelectExist(exist)
                    }
                    }
                  >
                    {exist || userChallenge.finishedAt ? "Ver entrega" : "Adicionar entregável"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        )
      })}
      <DeliverableModal
        userChallenge={userChallenge}
        deliverable={selectDeliverable}
        visible={deliverableModalModalVisible}
        close={() =>{
          refresh()
          setDeliverableModalVisible(false)
        }}
        userDeliverable={selectExist}
      />
    </Box>
  );
};

export default DeliverablesList;

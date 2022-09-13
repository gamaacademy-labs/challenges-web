import {
  Box,
  Button,
  Card,
  MaterialIcon,
  Typography,
} from "@gama-academy/smash-web";
import { useState } from 'react';
import { useDimensions } from "../../../../hooks/layout/use-dimensions.hook";
import { MOBILE_BREAKPOINT } from "../../../../utils/responsive";
import { DeliverableListProps } from "../../../challenge/components/deliverables-list/deliverables-list.types";
import { DeliverableModal } from '../deliverables-modal/deliverable-modal-comp';

const DeliverablesList = ({ data }: DeliverableListProps) => {
  const { width } = useDimensions();

  const [deliverableModalModalVisible, setDeliverableModalVisible] = useState(false)

  return (
    <Box px="2">
      {data.map((deliverable, index) => (
        <Card shadowBehavior="never" padding={0} mt={3} key={index.toString()}>
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
              backgroundColor="grey.1"
              borderRadius="1"
              padding={1}
              alignItems="center"
            >
              <MaterialIcon name="schedule" size={20} color="brand.secondary" />
              <Typography type="tips" ml="1">
                {deliverable.time}
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
                Defenda e adicione o link de sua entrega
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
                  onClick={() => setDeliverableModalVisible(true)}
                >
                  Adicionar entregável
                </Button>
                <DeliverableModal visible={deliverableModalModalVisible} close={() => setDeliverableModalVisible(false)} />
              </Box>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default DeliverablesList;
